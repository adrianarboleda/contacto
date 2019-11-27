import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ContactoPage } from '../contacto/contacto';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos:any;
  contactoPage = ContactoPage;
  infoPage = InfoPage;

  constructor(public navCtrl: NavController,
              public http: HttpClient) {

  }

  ionViewWillEnter(){
    this.http.get('/contactos/contactos/')
    .subscribe(data =>{
      this.contactos = data;
      console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  clickAdd(){
    this.navCtrl.push(this.contactoPage)
  }

  clickInfo(nombre, telefono, correo, facebook, twitter, instagram, img){
    this.navCtrl.push(this.infoPage,
                {nombre:nombre, telefono:telefono, correo:correo, facebook:facebook, 
                  twitter:twitter, instagram:instagram, img:img})
  }
}
