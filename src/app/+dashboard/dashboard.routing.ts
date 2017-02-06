import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
  {
    path: '', redirectTo: 'estadisticas', pathMatch: 'full'
  },
  {
    path: 'estadisticas',
    loadChildren: ()=> System.import('./+analytics/analytics.module')
      .then((imports: any)=> imports.AnalyticsModule)
  },
  {
    path: 'personal',
    loadChildren: ()=> System.import('./+social/social.module')
      .then((imports: any)=> imports.SocialModule)
  }
];

export const routing = RouterModule.forChild(routes);
