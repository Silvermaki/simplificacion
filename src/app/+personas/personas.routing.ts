import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AgregarPersonasComponent} from './agregar-personas/agregar-personas.component';
import {VerPersonasComponent} from './ver-personas/ver-personas.component';


export const routes:Routes = [
  {
    path: '',
    redirectTo: 'agregar'
  },
	{
    path: 'agregar',
    component: AgregarPersonasComponent,
    data: {pageTitle: 'Agregar Personas'}
  },
  {
    path: 'ver',
    component: VerPersonasComponent,
    data: {pageTitle: 'Visualizar Personas'}
  }
];

export const routing = RouterModule.forChild(routes);
