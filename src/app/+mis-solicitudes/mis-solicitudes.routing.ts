import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HistorialSolicitudesComponent} from './historial-solicitudes/historial-solicitudes.component';
import {HistorialTareasComponent} from './historial-tareas/historial-tareas.component';
import {TareasPendientesComponent} from './tareas-pendientes/tareas-pendientes.component';


export const routes:Routes = [
  {
    path: '',
    redirectTo: 'historial_solicitudes'
  },
  {
    path: 'tareas_pendientes',
    component: TareasPendientesComponent,
    data: {pageTitle: 'Tareas Pendientes'}
  },
	{
    path: 'historial_solicitudes',
    component: HistorialSolicitudesComponent,
    data: {pageTitle: 'Historial de Solicitudes'}
  },
  {
    path: 'historial_tareas',
    component: HistorialTareasComponent,
    data: {pageTitle: 'Historial de Tareas'}
  }
];

export const routing = RouterModule.forChild(routes);
