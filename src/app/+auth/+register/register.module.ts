import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AuthService } from '../auth.service';
import { SmartadminValidationModule } from "../../shared/forms/validation/smartadmin-validation.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    SmartadminValidationModule
  ],
  declarations: [RegisterComponent],
  providers:[AuthService]
})
export class RegisterModule { }
