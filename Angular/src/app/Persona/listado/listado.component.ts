import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService }from '../../Service/service.service'
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas:Persona[];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getPersonas().subscribe(data=>{this.personas=data;})
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado");
    })

  }

}
