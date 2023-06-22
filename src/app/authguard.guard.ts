import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private dataService: ApiService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const routeurl: string = state.url;
    return this.isLogin(routeurl);
  }

  isLogin(routeurl: string): boolean | UrlTree {
    if (this.dataService.isLoggedIn()) {
      return true;
    }

    this.dataService.redirectUrl = routeurl;
    return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: routeurl } });
  }
}



