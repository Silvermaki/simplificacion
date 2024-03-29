
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";


export const routes:Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: ()=> System.import('./+login/login.module').then((m)=>m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: ()=> System.import('./+register/register.module').then((m)=>m.RegisterModule)
  },
  {
    path: 'forgot-password',
    loadChildren: ()=> System.import('./+forgot/forgot.module').then((m)=>m.ForgotModule)
  }
];

export const routing = RouterModule.forChild(routes);
