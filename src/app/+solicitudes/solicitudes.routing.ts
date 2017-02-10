
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
	{
    path: '',
    loadChildren: 'app/+solicitudes/nueva-solicitud/nueva-solicitud.module#NuevaSolicitudModule',
    data: {pageTitle: 'Nueva Solicitud'}
  },
  {
    path: 'sdrl',
    loadChildren: 'app/+solicitudes/apertura-sdrl/sdrl.module#SdrlModule',
    data: {pageTitle: 'Sociedad de Responsabilidad Limitada'}
  },
  {
    path: 'sa',
    loadChildren: 'app/+solicitudes/apertura-sa/sa.module#SaModule',
    data: {pageTitle: 'Sociedad Anónima'}
  }
];

export const routing = RouterModule.forChild(routes);
