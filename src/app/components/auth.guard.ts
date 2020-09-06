import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    isLooggedIn;

  constructor(
    private Router: Router
  ) { }

  canActivate(): boolean {
      this.isLooggedIn = localStorage.getItem('isLoggined');
    if (this.isLooggedIn) {
      // this.Router.navigate([''])
      return true;
    } else {
      this.Router.navigate(['/login']);
      return false;
    }
  }
}