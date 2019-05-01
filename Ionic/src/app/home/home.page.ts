import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
  


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router,private alert:AlertController) {}

  

  Hola() {
    this.router.navigateByUrl('/listado');
    
  }

  addcliente(){
    this.router.navigateByUrl('/add');
  }

  async presentalert(){
    const alert = await this.alert.create({
      header:'Alerta',
      subHeader: 'Sub Alert',
      message:'Este es el mensaje',
      buttons:['OK']
    });

    await alert.present();
  }


}
