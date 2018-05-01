import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {IncidentsPage} from "../pages/incidents/incidents";
import {AuthService} from "../soc-bl/auth.service";
import {AppStorageService} from "../soc-bl/app-storage.service";
import {cbHttpClient} from "../soc-bl/app.classes";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "../soc-bl/auth.interceptor";
import {IncidentsService} from "../soc-bl/incidents.service";



export const authInterceptor = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
];

@NgModule({
  declarations: [
    MyApp,
    IncidentsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IncidentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    AppStorageService,
    cbHttpClient,
    authInterceptor,
    IncidentsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
