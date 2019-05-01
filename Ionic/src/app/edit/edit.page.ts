import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Persona } from 'src/app/Modelo/Persona';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  persona: Persona=new Persona();
  constructor(public router:Router, public service:ServiceService,private alert:AlertController) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }

  Actualizar(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      this.presentalert();
      this.router.navigate(['home'])
    })
  }

  async presentalert(){
    const alert = await this.alert.create({
      header:'Exito',
      message:'Cliente actualizado con exito',
      buttons:['OK']
    });

    await alert.present();
  }

}
