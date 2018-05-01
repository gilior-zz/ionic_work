import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {AuthConsts} from "./app.consts";

export const JWT_RESPONSE_HEADER = AuthConsts.TOKEN_STORAGE_NAME;
export const SHIFT_HEADER = AuthConsts.SHIFT_STORAGE_NAME;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public token = '';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(SHIFT_HEADER)

    const authReq = req.clone({setHeaders: {Shift: token || ''}});
    // return next.handle(authReq);

    return next.handle(authReq).pipe(
      tap(event => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          const token = event.headers.get(SHIFT_HEADER);
          if (token) localStorage.setItem(SHIFT_HEADER, token);
        }
      })
    );
  }

  public saveToken(res: Response): void {
    const token = res.headers.get(JWT_RESPONSE_HEADER);
    if (token) localStorage.setItem(JWT_RESPONSE_HEADER, token);
  }
}
