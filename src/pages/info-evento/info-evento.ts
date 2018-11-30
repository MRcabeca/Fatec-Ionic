import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {

  public data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let retorno = this.navParams.get('data');
    this.data = JSON.parse(retorno);
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventoPage');
  }
}
