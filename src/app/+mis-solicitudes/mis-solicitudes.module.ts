import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {routing} from "./mis-solicitudes.routing";
import {HistorialSolicitudesComponent} from './historial-solicitudes/historial-solicitudes.component';
import {HistorialTareasComponent} from './historial-tareas/historial-tareas.component';
import {TareasPendientesComponent} from './tareas-pendientes/tareas-pendientes.component';
import {MisSolicitudesService} from './mis-solicitudes.service';
import {SmartadminModule} from "../shared/smartadmin.module";
import {SmartadminWizardsModule} from "../shared/forms/wizards/smartadmin-wizards.module";
import {SmartadminFormsModule} from "../shared/forms/smartadmin-forms.module";

@NgModule({
  declarations: [HistorialSolicitudesComponent, HistorialTareasComponent, TareasPendientesComponent], 
  imports: [routing, SmartadminModule, SmartadminWizardsModule, CommonModule],
  providers:[MisSolicitudesService]
})
export class MisSolicitudesModule {}

