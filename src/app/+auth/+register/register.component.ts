import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})



export class RegisterComponent implements OnInit {

  ngOnInit() {
  }

  public register_validations = {
    rules : {
      username : {
        required : true,
        minlength: 4,
        maxlength: 20
      },
      email : {
        required : true,
        email : true,
        maxlength: 50
      },
      password : {
        required : true,
        minlength: 8,
        maxlength: 15
      },
      passwordConfirm : {
        required : true,
        equalTo: '#password'
      },
      firstNames: {
        required : true,
        maxlength: 50
      },
      lastNames : {
        required : true,
        maxlength: 50
      },
      gender : {
        required : true,
      }
    },

    // Messages for form validation
    messages : {
      username : {
        required : 'Debe de ingresar un nombre de usuario',
        minlength: 'El nombre de usuario debe de tener entre 4 y 20 caracteres',
        maxlength: 'El nombre de usuario debe de tener entre 4 y 20 caracteres'
      },
      email : {
        required : 'Debe de ingresar su correo electrónico',
        email: 'El formato de correo electrónico es inválido',
        maxlength: 'El correo no puede ser mayor a 50 caracteres'
      },
      password : {
        required : 'Debe de ingresar una contraseña',
        minlength: 'La contraseña debe de tener entre 8 y 15 caracteres',
        maxlength: 'La contraseña debe de tener entre 8 y 15 caracteres'
      },
      passwordConfirm : {
        required : 'Debe de verificar su contraseña',
        equalTo: 'Las contraseñas no coinciden'
      },
      firstNames: {
        required : 'Debe de ingresar su nombre',
        maxlength: 'El nombre no puede ser mayor a 50 caracteres'
      },
      lastNames : {
        required : 'Debe de ingresar su apellido',
        maxlength: 'El apellido no puede ser mayor a 50 caracteres'
      },
      gender : {
        required : 'Debe de seleccionar su género',
      }
    }

  };

  constructor(
    private router: Router ,
    private AuthenticationService : AuthService 
  ){}

  private user:User = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    gender: "0"
  };

  private pwConfirm:String = "";

  private agreeTerms:boolean = false;

  private load:any = {
  };
  
  registerUser(event: Event){     
    event.preventDefault();
    if(this.disableRegister() == false){
      this.AuthenticationService.registerUser(this.user).subscribe(
          data => this.load = data,
          err => console.log(err),
          ()=>this.verifyError()
      );
      
    }
  }

  private errorMessage: String = "";
  private successMessage: String = "";

  verifyError(){
    if(this.load[0][0]['']){
      this.errorMessage = "";
      this.successMessage = "Usuario registrado exitósamente";
    }else if(this.load[0][0]["ErrorNumber"]==2627){
      this.errorMessage = "El usuario o el correo proporcionado ya se encuentran en uso";
      this.successMessage = "";
    }else{
      this.errorMessage = "Error en el servidor";
      this.successMessage = "";
    }
  }

  disableRegister(){      
    if(this.user.username.length < 4 || this.user.username.length > 20){
      return true;
    }
    if(this.user.email.length < 1 || this.user.email.length > 50 || !(this.user.email.indexOf("@")>=0)||this.user.email.indexOf("@")===this.user.email.length-1){
      return true;
    }
    if(this.user.password.length < 8 || this.user.password.length > 15 || this.user.password != this.pwConfirm){
      return true;
    }
    if(this.user.last_name.length < 1 || this.user.last_name.length > 50){
      return true;
    }
    if(this.user.first_name.length < 1 || this.user.first_name.length > 50){
      return true;
    }
    if(this.user.gender === "0"){
      return true;
    }
    return false;
  }
}
