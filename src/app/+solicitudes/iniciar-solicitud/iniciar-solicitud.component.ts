import {
  Component, OnInit, trigger,
  state,
  style,
  transition,
  animate, OnChanges, Input, DoCheck,
} from '@angular/core';
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
export class IniciarSolicitudComponent implements OnInit {

  @Input() data: any;
  @Input() activeStep: any;
  @Input() model: any;
  ngOnInit() {
  }




  constructor(private SolicitudesService : SolicitudesService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.tasks = [];
  } 
  private currentUser: any;  
  private tasks: any;

  print(){
    console.log(this.data);
    console.log(this.model);
    console.log(this.model.CIUDAD);
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


  onWizardComplete(data) {
    console.log('basic wizard complete', data)
  }

}
