import {SolicitudesComponent} from './solicitudes.component';
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
	{
    path: '',
    component: SolicitudesComponent,
    data: {pageTitle: 'Solicitudes'}
  }
];

export const routing = RouterModule.forChild(routes);
