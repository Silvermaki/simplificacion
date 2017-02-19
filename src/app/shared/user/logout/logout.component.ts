import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NotificationService} from "../../utils/notification.service";

declare var $:any;

@Component({
  selector: 'sa-logout',
  template: `
<div id="logout" (click)="showPopup()" class="btn-header transparent pull-right">
        <span> <a routerlink="/login" title="Sign Out" data-action="userLogout"
                  data-logout-msg="¿Desconectarse de MiEmpresaEnLínea?"><i
          class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private notificationService: NotificationService) { }

  showPopup(){
    this.notificationService.smartMessageBox({
      title : "<i class='fa fa-sign-out txt-color-orangeDark'></i> Desconectarse <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
      content : "¿Desconectarse de MiEmpresaEnLínea?",
      buttons : '[No][Desconectarse]'

    }, (ButtonPressed) => {
      if (ButtonPressed == "Desconectarse") {
        this.logout()
      }
    });
  }

  logout(){
      sessionStorage.setItem("user", JSON.stringify({hash:"", isLoggedIn:false}));
      this.router.navigate(['/login'])
  }

  ngOnInit() {

  }



}
