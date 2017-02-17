import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {routing} from "./solicitudes.routing";
import {IniciarSolicitudComponent} from './iniciar-solicitud/iniciar-solicitud.component';
import {SolicitudesComponent} from './solicitudes.component';
import {SolicitudesService} from './solicitudes.service';
import {SmartadminModule} from "../shared/smartadmin.module";
import {SmartadminWizardsModule} from "../shared/forms/wizards/smartadmin-wizards.module";
import {SmartadminInputModule} from "../shared/forms/input/smartadmin-input.module";

@NgModule({
  declarations: [SolicitudesComponent, IniciarSolicitudComponent], 
  imports: [routing, SmartadminModule, SmartadminWizardsModule, CommonModule, SmartadminInputModule],
  providers:[SolicitudesService]
})
export class SolicitudesModule {}

