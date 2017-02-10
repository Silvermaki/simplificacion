
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  {
    path: 'sdrl',
    loadChildren: 'app/+solicitudes/apertura-sdrl/sdrl.module#SdrlModule',
    data: {pageTitle: 'Sociedad de Responsabilidad Limitada'}
  }
];

export const routing = RouterModule.forChild(routes);
