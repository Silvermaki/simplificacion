import {
  Component, OnInit, trigger,
  state,
  style,
  transition,
  animate, OnChanges, Input, DoCheck,
} from '@angular/core';
import { Router } from "@angular/router";
import {PersonasService} from '../personas.service';

@Component({
  selector: 'ver-personas',
  templateUrl: './ver-personas.component.html',
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
export class VerPersonasComponent implements OnInit {

  constructor(private router: Router ,
    private PersonasService : PersonasService) {
    this.persons = [];
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.loadPersons();
  }

  private persons: any;
  private currentUser:any;
  ngOnInit() {

  }
  loadPersons(){
    this.PersonasService.getPersons(this.currentUser).subscribe(
      data =>{this.persons = data[0]},
      err => console.log(err)
      );
  }

}
