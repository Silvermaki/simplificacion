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
    this.loadSections();
  }

  ngOnInit() {

  }

  public data;

  private processes:any = [];

  private sections:any = [];



  private currentSections:any = [];

  private currentUser = JSON.parse(sessionStorage.getItem('user'));

  loadProcesses(){
    this.SolicitudesService.getProcesses(this.currentUser).subscribe(
      data =>{this.processes = data[0]},
      err => console.log(err)
    );
  }

  loadSections(){
    this.SolicitudesService.getSections(this.currentUser).subscribe(
        data =>{this.sections = data[0]},
        err => console.log(err)
    );
  }

  processChanged(){
    if(this.data.process != ""){
      this.data.section = "";
      this.currentSections = [];
      var i;
      for (i = 0;i<this.sections.length; i = i+1) {
        if(this.sections[i].id_process === this.data.process.id_process){
           this.currentSections.push(this.sections[i]);
        }
      }
    }else{
      this.data.section = "";
      this.currentSections = [];
    }
  }

  submitForm(){
 
      //this.router.navigate(['/principal/solicitudes/sdrl']);
   
      //this.router.navigate(['/principal/solicitudes/sa']);
    
  }
}
