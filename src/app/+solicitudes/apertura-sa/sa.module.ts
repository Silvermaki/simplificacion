import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { saRouting } from './sa.routing';
import {SaComponent} from "./sa.component";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminWizardsModule} from "../../shared/forms/wizards/smartadmin-wizards.module";
import {AperturaSaComponent} from "./nueva-sa/apertura-sa.component";
import { SolicitudesService } from '../solicitudes.service';

@NgModule({
  imports: [
    CommonModule,
    saRouting,
    SmartadminModule,
    SmartadminWizardsModule
  ],
  declarations: [SaComponent, AperturaSaComponent],
  providers:[SolicitudesService]
})
export class SaModule { }
