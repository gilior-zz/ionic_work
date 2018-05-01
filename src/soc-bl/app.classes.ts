import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {pipe} from "rxjs/Rx";
import {map, mergeMap, retryWhen, zip} from "rxjs/operators";
import {range} from "rxjs/observable/range";
import * as _ from 'lodash';
import {timer} from "rxjs/observable/timer";
import {IRequestOptions} from "./app.consts";

export class Permissible {


  public permissionsData: PermissionsData;

  constructor() {
    this.permissionsData = new PermissionsData();
  }

  public setCustomer(customerID: number) {
    this.permissionsData = _.assign({}, this.permissionsData, {customerID: customerID});
  }
}

export class PermissionsData {
  public customerID: number;
}


@Injectable()
export class cbHttpClient {

  /**
   * @return an `Observable` of whatever was requested, typed to `T`.
   */
  constructor(public http: HttpClient) {

  }

  public doHttpRequest<T>(requestOptions: IRequestOptions): Observable<HttpResponse<T>> {

    const response = this.http.request(
      requestOptions.method,
      requestOptions.url,
      {
        body: requestOptions.body,
        params: requestOptions.params,
        responseType: requestOptions.responseType
      });

    const httpResponse = response.pipe(
      this.retryStrategy(4, 300));
    return httpResponse as Observable<HttpResponse<T>>;
  }

  retryStrategy(maxTries, ms) {
    return pipe(
      retryWhen(attempts => range(1, maxTries)
        .pipe(
          zip(attempts, (i) => i),
          map(i => i * i),
          mergeMap(i => timer(i * ms))
        )
      )
    );
  }
}

// ******* App infrastructure Types***********
export class DictinaryReference {
  ID: number;
  Key?: string;
  Synopsis: string;
}



