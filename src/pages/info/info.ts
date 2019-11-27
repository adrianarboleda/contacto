import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  nombre = "";
  telefono = "";
  correo = "";
  facebook = "";
  twitter = "";
  instagram = "";
  img ="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = navParams.get('nombre');
    this.telefono = navParams.get('telefono');
    this.correo = navParams.get('correo');
    this.facebook = navParams.get('facebook');
    this.twitter = navParams.get('twitter');
    this.instagram = navParams.get('instagram');
    this.img = navParams.get('img');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
