
import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {NuevaSolicitudComponent} from "./nueva-solicitud.component";

export const nuevaSolicitudRoutes: Routes = [{
  path: '',
  component: NuevaSolicitudComponent
}];

export const nuevaSolicitudRouting = RouterModule.forChild(nuevaSolicitudRoutes);

