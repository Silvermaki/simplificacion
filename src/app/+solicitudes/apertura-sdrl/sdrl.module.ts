import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sdrlRouting } from './sdrl.routing';
import {SdrlComponent} from "./sdrl.component";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminWizardsModule} from "../../shared/forms/wizards/smartadmin-wizards.module";
import {AperturaSdrlComponent} from "./nueva-sdrl/apertura-sdrl.component";
import { SolicitudesService } from '../solicitudes.service';

@NgModule({
  imports: [
    CommonModule,
    sdrlRouting,
    SmartadminModule,
    SmartadminWizardsModule
  ],
  declarations: [SdrlComponent, AperturaSdrlComponent],
  providers:[SolicitudesService]
})
export class SdrlModule { }
