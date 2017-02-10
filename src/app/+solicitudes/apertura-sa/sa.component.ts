import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import { SolicitudesService } from '../solicitudes.service';

@FadeInTop()
@Component({
  selector: 'solicitudes-sa',
  templateUrl: './sa.component.html',
})
export class SaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
