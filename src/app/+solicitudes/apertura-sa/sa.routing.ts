
import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {SaComponent} from "./sa.component";

export const saRoutes: Routes = [{
  path: '',
  component: SaComponent
}];

export const saRouting = RouterModule.forChild(saRoutes);

