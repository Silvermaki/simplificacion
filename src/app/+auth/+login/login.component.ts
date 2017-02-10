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
		      data => {this.load = data, this.checkData()},
		      err => console.log(err)
		    );
		}
  	}

  	checkData(){
  		var result = this.load[0][0][''];
  		if(result === 0){
  			//console.log(result);
  			this.error = "";
  			this.saveLogin();

  		}else{
  			//console.log("wrong login");
  			//console.log(result);
  			this.error = "Correo o contraseña incorrectos";

  		}
  	}

  	saveLogin(){
  		this.router.navigate(['/principal/dashboard']);
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
