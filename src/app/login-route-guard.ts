import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor() {}
  canActivate() {
  	var currentUser = JSON.parse(sessionStorage.getItem('user'));
    return currentUser.isLoggedIn;
  }
}