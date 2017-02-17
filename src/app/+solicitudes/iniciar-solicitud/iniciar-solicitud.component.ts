import {
  Component, OnInit, trigger,state,ElementRef,style,transition,animate, OnChanges, Input, DoCheck,} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml} from '@angular/platform-browser';
import {SolicitudesService} from '../solicitudes.service';
@Component({
  selector: 'iniciar-solicitud',
  templateUrl: './iniciar-solicitud.component.html',
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
export class IniciarSolicitudComponent implements OnInit, DoCheck {

  @Input() data: any;
  @Input() activeStep: any;
  @Input() model: any;
  ngOnInit() {
  }



  constructor(private SolicitudesService : SolicitudesService, private _sanitizer: DomSanitizer) {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.tasks = [];

  } 
  private currentUser: any;  
  private tasks: any;

  print(){
    console.log(this.data);
    console.log(this.model);
  }

  setActiveStep(step) {
    this.activeStep = step;
  }

  prevStep() {
    let idx = this.data.forms.indexOf(this.activeStep);
    if (idx > 0) {
      this.activeStep = this.data.forms[idx - 1]
    }
  }

  nextStep() {
    this.activeStep.submitted = true;
    if(!this.activeStep.valid){
      return;
    }
    this.activeStep.checked = true;
    if (this.data.forms.every(it=>(it.valid && it.checked))) {
      this.onWizardComplete(this.model)
    } else {
      let idx = this.data.forms.indexOf(this.activeStep);
      this.activeStep = null;
      while (!this.activeStep) {
        idx = idx == this.data.forms.length - 1 ? 0 : idx + 1;
        if (!this.data.forms[idx].valid || !this.data.forms[idx].checked ) {
          this.activeStep = this.data.forms[idx]
        }
      }
    }
  }


verify(){
  if(this.activeStep){
    if(this.activeStep.submitted && !this.activeStep.valid){
      return true;
    }
  }
  return false;
}

  onWizardComplete(data) {
    console.log('basic wizard complete', data)
  }

  private lastModel;

  // custom change detection
  ngDoCheck() {
    if (!this.lastModel) {
      // backup model to compare further with
      this.lastModel = Object.assign({}, this.model)
    } else {
      if (Object.keys(this.model).some(it=>this.model[it] != this.lastModel[it])) {
        // change detected
        var i;
        for(i=0;i<this.data.forms.length;i++){
         var j;
         var values = [];
         for(j=0;j<this.data.forms[i].fields.length;j++){
            for(var key in this.model) {
              if(key === this.data.forms[i].fields[j].name){
                if(this.model[key]){
                  values.push(true);
                }else{
                  values.push(false);
                }
              }
            }
         }
          this.data.forms[i].valid = values.every(x=>x===true);
        }
        this.lastModel = Object.assign({}, this.model);
      }
    }
  }

}
