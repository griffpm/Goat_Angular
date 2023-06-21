import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ShieldService } from './shield.service';

@Injectable({
  providedIn: 'root'
})

export class ShieldGuard implements CanActivate {

  constructor(
    private shieldService: ShieldService,
    private router: Router
  ){}

  canActivate(): boolean {
    if(this.shieldService.isLoggedIn){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}