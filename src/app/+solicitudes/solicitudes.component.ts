import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {SolicitudesService} from './solicitudes.service';

@Component({
  selector: 'solicitudes',
  templateUrl: './solicitudes.component.html',
})
export class SolicitudesComponent implements OnInit {

  constructor(private router: Router ,
    private SolicitudesService : SolicitudesService) {
  }

  ngOnInit() {

  }
}