import {Injectable} from '@angular/core';
import {AuthConsts, baseApiUrl} from "./app.consts";
import {cbHttpClient} from "./app.classes";
import * as _ from "lodash";
import {AppStorageService} from "./app-storage.service";


@Injectable()
export class AuthService {
  public apiUrl = baseApiUrl + 'login/';
  isLogged = false;

  constructor(public http: cbHttpClient,
              private  appStorageService: AppStorageService) {
    //this.subscribeShiftSocket();
  }

  login() {
    //return this.http.get(this.apiUrl);
    return this.http.doHttpRequest({method: "GET", url: this.apiUrl})
      .do((resData: any) => {
        let shift: any = _.get(resData, 'ShiftDetails');
        let customers: any = _.get(resData, 'Customers');
        let isMSSPMode: any = _.get(resData, 'IsMSSPMode');
        let user: any = _.get(resData, 'User');
        if (shift)
          this.appStorageService.set(AuthConsts.SHIFT_STORAGE_NAME, shift);
      })


  }
}



