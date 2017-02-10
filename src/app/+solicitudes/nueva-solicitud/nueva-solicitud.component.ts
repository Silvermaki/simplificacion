import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {SolicitudesService} from '../solicitudes.service';

@Component({
  selector: 'nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
})
export class NuevaSolicitudComponent implements OnInit {

  constructor(private router: Router ,
    private SolicitudesService : SolicitudesService) {
    
  }

  ngOnInit() {

  }

  public var: String = "";

  public data = {
    process: '',
    section: ''
  };

  private processes:any = [];

  private sections:any = {
  };

  private user = {hash:'', email:''};

  loadProcesses(){
  }

  saveProcesses(){

  }

  loadSections(){

  }

  submitForm(){
    if(this.data.process === "1"){
      this.router.navigate(['/principal/solicitudes/sdrl']);
    }else if(this.data.process==="2"){
      this.router.navigate(['/principal/solicitudes/sa']);
    }
  }
}
