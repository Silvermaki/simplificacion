import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nuevaSolicitudRouting } from './nueva-solicitud.routing';
import { NuevaSolicitudComponent } from './nueva-solicitud.component';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminWizardsModule} from "../../shared/forms/wizards/smartadmin-wizards.module";
import { SolicitudesService } from '../solicitudes.service';

@NgModule({
  imports: [
    CommonModule,
    nuevaSolicitudRouting,
    SmartadminModule,
    SmartadminWizardsModule
  ],
  declarations: [NuevaSolicitudComponent],
  providers:[SolicitudesService]
})
export class NuevaSolicitudModule { }
