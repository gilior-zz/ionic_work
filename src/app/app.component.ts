import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IncidentsPage} from "../pages/incidents/incidents";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') navController: NavController;


  incidentsPage: any = IncidentsPage;
  alertsPage: any = 'AlertsPage';

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menu: MenuController) {
    menu.enable(true);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.navController.setRoot(page);
    this.menu.close();
  }
}

