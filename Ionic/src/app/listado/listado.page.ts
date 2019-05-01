import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  personas:Persona[];
  constructor(public service:ServiceService,public router:Router,private alert:AlertController) { }

  ngOnInit() {
    this.service.getPersonas().subscribe(data=>{this.personas=data;})
  }
  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(['edit']);
  }

  Delete(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      this.presentalert();
    })

  }

  async presentalert(){
    const alert = await this.alert.create({
      header:'Exito',
      message:'Cliente eliminado con exito',
      buttons:['OK']
    });

    await alert.present();
  }
  
}
