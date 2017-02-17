import {
  Component, OnInit, trigger,
  state,
  style,
  transition,
  animate, OnChanges, Input, DoCheck,
} from '@angular/core';
import { Router } from "@angular/router";
import {MisSolicitudesService} from '../mis-solicitudes.service';

@Component({
  selector: 'tareas-pendientes',
  templateUrl: './tareas-pendientes.component.html',
  animations: [
    trigger('changePane', [
      state('out', style({
        height: 0,
      })),
      state('in', style({
        height: '*',
      })),
      transition('out => in', animate('250ms ease-out')),
      transition('in => out', animate('250ms 300ms ease-in '))
    ])
  ]
})
export class TareasPendientesComponent implements OnInit {

  constructor(private router: Router ,
    private MisSolicitudesService : MisSolicitudesService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  private currentUser:any;
  ngOnInit() {

  }


}
