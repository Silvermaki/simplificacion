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
    this.data = {
      process: "",
      section: ""
    };
    this.loadProcesses();
  }

  ngOnInit() {

  }

  public data;


  private processes:any = [];

  private sections:any = [];

  private currentUser = JSON.parse(sessionStorage.getItem('user'));

  loadProcesses(){
    this.SolicitudesService.getProcesses(this.currentUser).subscribe(
      data =>{this.processes = data[0]},
      err => console.log(err)
    );
  }

  loadSections(){
    if(this.data.process != ""){
      var payload = {hash:this.currentUser.hash, id:this.data.process.id_process};
      this.data.section = "";
      this.SolicitudesService.getSections(payload).subscribe(
        data =>{this.sections = data[0]},
        err => console.log(err)
      );
    }else{
      this.data.section="";
      this.sections = [];
    }
  }

  submitForm(){
 
      //this.router.navigate(['/principal/solicitudes/sdrl']);
   
      //this.router.navigate(['/principal/solicitudes/sa']);
    
  }
}
