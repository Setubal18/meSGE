import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthedService } from '../services/authed.service';

@Injectable({
  providedIn: 'root'
})
export class AuthedGuard implements CanActivate, CanActivateChild, CanLoad {
  private user;
  constructor(private router: Router, private authedService: AuthedService) {
    this.user = authedService.loaduser();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verifyAccess();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verifyAccess();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyAccess();
  }
  private async verifyAccess() {
    const user = await this.authedService.loaduser();
    console.log('aqui', user);
    if (user.id === 'ADMIN') {
      return true;
    }
    if (user.id) {
      return true;
    }
    this.router.navigate(['auth']);
    return false;
  }
}
