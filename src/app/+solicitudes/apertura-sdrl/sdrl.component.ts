import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import { SolicitudesService } from '../solicitudes.service';

@FadeInTop()
@Component({
  selector: 'solicitudes-sdrl',
  templateUrl: './sdrl.component.html',
})
export class SdrlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
