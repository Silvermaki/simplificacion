import {
  Component, OnInit, trigger,
  state,
  style,
  transition,
  animate, OnChanges, Input, DoCheck,
} from '@angular/core';
import { Router } from "@angular/router";
import {PersonasService} from '../personas.service';

@Component({
  selector: 'agregar-personas',
  templateUrl: './agregar-personas.component.html',
  animations: [
    trigger('changePane', [
      state('out', style({
        height: 0,
      })),
      state('in', style({
        height: '*',
      })),
      transition('out => in', animate('250ms ease-out')),
      transition('in => out', animate('250ms 300ms ease-in '))
    ])
  ]
})
export class AgregarPersonasComponent implements OnInit {

  constructor(private router: Router ,
    private PersonasService : PersonasService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.persona = {
      hash:this.currentUser.hash,
      nombre:"",
      apellido:"",
      profesion:"",
      estadoCivil:"",
      nacionalidad:"",
      tipoIdentificacion:"",
      numeroIdentificacion:"",
      correo:"",
      direccion:""
    }
    this.submitted = false;
    this.countries = [];
    this.getCountries();
  }

  private submitted: boolean;

  private documents: string[];

  private persona;

  private result:any;

  private currentUser:any;

  private messageError:String;
  private messageSuccess:String;
  private countries: any;

  getCountries(){
    this.PersonasService.getCountries(this.persona).subscribe(
      data =>{this.countries = data[0]},
      err => console.log(err)
     );

  }

  checkDocument(){
    if(this.persona.nacionalidad === "Honduras"){
      this.documents = ["Tarjeta de Identidad"];
      this.persona.tipoIdentificacion = "";
    }else if (this.persona.nacionalidad ===""){
      this.documents = [];
      this.persona.tipoIdentificacion = "";
    }else{
      this.documents = ["Pasaporte", "Carné de Residencia"];
      this.persona.tipoIdentificacion = "";
    }
  }

  ngOnInit() {

  }

  checkValues(){
    if(this.result === -1971){
      this.messageError = "Error al agregar persona";
      this.messageSuccess = "";
    }else{
      this.messageSuccess = "Persona agregada exitósamente";
      this.messageError = "";
      this.persona = {
      hash:this.currentUser.hash,
      nombre:"",
      apellido:"",
      profesion:"",
      estadoCivil:"",
      nacionalidad:"",
      tipoIdentificacion:"",
      numeroIdentificacion:"",
      correo:"",
      direccion:""
    }
    this.submitted = false;
    }
  }

  submitForm(){
    this.submitted = true;
    this.PersonasService.addPerson(this.persona).subscribe(
      data =>this.result = data[0][0]['mensaje'],
      err => console.log(err),
      ()=>this.checkValues()
      );

  }
}
