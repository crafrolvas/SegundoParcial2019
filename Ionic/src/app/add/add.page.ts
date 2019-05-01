import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Persona } from 'src/app/Modelo/Persona';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  persona:Persona=new Persona();

  constructor(private router:Router, private service:ServiceService,private alert:AlertController) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      this.presentalert();
      this.router.navigate(['listado']);
    })
  }

  async presentalert(){
    const alert = await this.alert.create({
      header:'Exito',
      message:'Cliente agregado con exito',
      buttons:['OK']
    });

    await alert.present();
  }
}
