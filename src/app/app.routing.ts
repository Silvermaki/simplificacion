
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '', 
    component: AuthLayoutComponent, 
    loadChildren: 'app/+auth/auth.module#AuthModule',
    data: {pageTitle: 'MiEmpresaEnLínea'}
  },  

  {
    path: 'principal',
    component: MainLayoutComponent,
    data: {pageTitle: 'Principal'},
    children: [
      {
        path: '', redirectTo: 'dashboard/analytics', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
        data: {pageTitle: 'Inicio'}
      },
      {
        path: 'correo',
        loadChildren: 'app/+outlook/outlook.module#OutlookModule',
        data: {pageTitle: 'Correo'}
      },
      {
        path: 'solicitudes',
        loadChildren: 'app/+solicitudes/solicitudes.module#SolicitudesModule',
        data: {pageTitle: 'Solicitudes'}
      }
    ]
  },

  {path: '**', redirectTo: 'miscellaneous/error404'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
