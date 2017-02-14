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
  	this.data = {
      process: "",
      section: "",
      task: "",
      forms:""
    };
    this.loadProcesses();
    this.loadSections();
  	this.newRequest = false;
  	this.start = true;
    this.message = "";
    this.model = [];
    this.modelFormat = {};
  }

  private newRequest:boolean;
  private start: boolean;
  
  checkSelection(){

  }

  ngOnInit() {

  }

  public data;

  private processes:any;

  private sections:any;

  private tasks: any;

  private forms: any;

  private fields: any;

  private model: any;

  private modelFormat: any;

  private message:String;

  private currentSections:any = [];

  private currentUser = JSON.parse(sessionStorage.getItem('user'));

  loadTasks(){
    var load = {
      hash:this.currentUser.hash,
      id:this.data.section.id_section
    }
    this.SolicitudesService.getTasks(load).subscribe(
      data =>{this.tasks = data[0]},
      err => console.log(err), 
      () => this.loadForms()
    );
  }

  loadForms(){
    this.setTask();
    this.data.forms = [];
    var load = {
      hash:this.currentUser.hash,
      id:this.data.task.id_task
    }
    this.SolicitudesService.getForms(load).subscribe(
      data =>{
        this.forms = data[0]
      },
      err => console.log(err),
      ()=> this.loadFields()
    );
  }

  loadFields(){
    var load = {
      hash: this.currentUser.hash,
      id:this.data.section.id_section
    }
    this.SolicitudesService.getFields(load).subscribe(
      data =>{this.fields = (data[0])},
      err => console.log(err),
      ()=>{
        this.setFormsFields()}
    );
  }

  setFormsFields(){
    var formFields = [];
    var values = [];
    this.model = [];
    var i;
    for(i=0;i<this.forms.length;i++){
      var j;
      for(j=0;j<this.fields.length;j++){
        if(this.forms[i].id_form === this.fields[j].id_form){
          formFields.push(this.fields[j]);
          var copy = Object.assign({}, this.fields[j]);
          this.model.push(copy);
        }
      }
      var temp = this.forms[i];
      temp.fields = formFields;
      temp.valid= false,
      temp.checked= false,
      temp.submitted= false,
      values.push(temp);
      formFields = [];

    }
    this.setModel();
    this.data.forms = values;
  }

  setTask(){
    var i;
    for (i = 0;i<this.tasks.length; i = i+1) {
      if(this.tasks[i].name === "Llenar Formulario"){
         this.data.task = this.tasks[i];
      }
    }
  }

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

  setModel(){
    var i;
    for(i = 1;i<this.model.length;i++){
      var value = this.model[i].name;
      this.modelFormat[value] = "";
    }
  }

  submitForm(){
    this.loadTasks();
    this.start = false;
    this.newRequest = true;
  }
}