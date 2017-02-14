import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {routing} from "./personas.routing";
import {VerPersonasComponent} from './ver-personas/ver-personas.component';
import {AgregarPersonasComponent} from './agregar-personas/agregar-personas.component';
import {PersonasService} from './personas.service';
import {SmartadminModule} from "../shared/smartadmin.module";
import {SmartadminWizardsModule} from "../shared/forms/wizards/smartadmin-wizards.module";
import {SmartadminFormsModule} from "../shared/forms/smartadmin-forms.module";

@NgModule({
  declarations: [AgregarPersonasComponent, VerPersonasComponent], 
  imports: [routing, SmartadminModule, SmartadminWizardsModule, CommonModule],
  providers:[PersonasService]
})
export class PersonasModule {}

