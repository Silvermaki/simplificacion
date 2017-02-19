import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service'
import { Login } from '../login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	ngOnInit() {
  	}

  	public login_validations = {
    rules : {
      email : {
        required : true,
        email: true
      },
      password : {
        required : true
      }
    },

    // Messages for form validation
    messages : {
      email : {
        required : 'Debe de ingresar su correo electrónico',
        email : 'El formato de correo es inválido'
      },
      password : {
        required : 'Debe de ingresar una contraseña'
      }
    }
  };

  constructor(
  	private router: Router,
  	private AuthenticationService : AuthService ) {}

 

	private login_detail:Login = {
	    username: "",
	    password: ""
	};

	private load: any;

	private error: String = "";

	login(){
		if(this.disableLogin() == false){
		    this.AuthenticationService.login(this.login_detail).subscribe(
		      data => this.load = data,
		      err => console.log(err),
          ()=>this.checkData()
		    );
		}
  }

	checkData(){
		var result = this.load[0][0]['mensaje'];
    if(result == -1971){
      this.error = "Correo o Contraseña incorrectos";
    }else{
      this.error = "";
      sessionStorage.setItem("user", JSON.stringify({hash:result, isLoggedIn:true}));
      this.router.navigate(['/principal']);
    }
	}



disableLogin(){      
  if(this.login_detail.username.length < 1 || !(this.login_detail.username.indexOf("@")>=0)||this.login_detail.username.indexOf("@")===this.login_detail.username.length-1){
    return true;
  }
  if(this.login_detail.password.length < 1){
    return true;
  }
  return false;
  }

}
