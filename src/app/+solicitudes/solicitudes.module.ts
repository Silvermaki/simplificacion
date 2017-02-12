import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {routing} from "./solicitudes.routing";
import {AperturaSdrlComponent} from './apertura-sdrl/apertura-sdrl.component';
import {AperturaSaComponent} from './apertura-sa/apertura-sa.component';
import {SolicitudesComponent} from './solicitudes.component';
import {SolicitudesService} from './solicitudes.service';
import {NuevaSolicitudComponent} from './nueva-solicitud/nueva-solicitud.component';
import {SmartadminModule} from "../shared/smartadmin.module";
import {SmartadminWizardsModule} from "../shared/forms/wizards/smartadmin-wizards.module";

@NgModule({
  declarations: [SolicitudesComponent, AperturaSdrlComponent, AperturaSaComponent, NuevaSolicitudComponent], 
  imports: [routing, SmartadminModule, SmartadminWizardsModule, CommonModule],
  providers:[SolicitudesService]
})
export class SolicitudesModule {}

