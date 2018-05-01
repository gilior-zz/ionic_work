import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../soc-bl/auth.service";
import {IncidentsService} from "../../soc-bl/incidents.service";

/**
 * Generated class for the IncidentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incidents',
  templateUrl: 'incidents.html',
})
export class IncidentsPage {
  private incidents: any[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  authService: AuthService,
              private  incidentsService:IncidentsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidentsPage');

    this.incidentsService.getIncidents({})
      .subscribe((i:any)=>this.incidents=i.Data)
  }

  ionViewCanEnter() {
    this.authService.login()
      .subscribe();
  }
}
