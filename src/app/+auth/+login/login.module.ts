import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { SmartadminValidationModule } from "../../shared/forms/validation/smartadmin-validation.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    SmartadminValidationModule
  ],
  declarations: [LoginComponent],
  providers:[AuthService]
})
export class LoginModule { }
