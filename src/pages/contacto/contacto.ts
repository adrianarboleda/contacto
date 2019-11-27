import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  nombre = "";
  telefono = "";
  correo = "";
  facebook = "";
  twitter = "";
  instagram = "";
  img ="https://static2.elnortedecastilla.es/www/pre2017/multimedia/noticias/201501/12/media/cortadas/facebook-profile-picture-no-pic-avatar--575x323.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  addContacto(){

    const contacto = {
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram,
      img: this.img
    }
    console.log(JSON.stringify(contacto));

    this.http.post('/contactos/contactos/', contacto)
    .subscribe(data =>{
      console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, error=> {
      console.log(JSON.stringify(error));
      this.navCtrl.pop();
    })
  }

}
