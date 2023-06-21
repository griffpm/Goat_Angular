import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShieldService } from '../shield.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecté. (admin/admin)';
  name!: string;
  password!: string;
  shield!: ShieldService;

  constructor(private shieldService: ShieldService, private router: Router) { }

  ngOnInit(){
    this.shield = new ShieldService;
  }

  // Informe l'utilisateur sur son authentification.
  setMessage() {
    this.message = this.shield.isLoggedIn ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.shieldService.login(this.name, this.password).subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if (isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définie, redirige l'utilisateur vers la liste goats.
        let redirect = this.shieldService.redirectUrl ? this.shieldService.redirectUrl : '/goats';
        // Redirige l'utilisateur
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    });
  }

  // Déconnecte l'utilisateur
  logout() {
    this.shield.logout();
    this.setMessage();
  }
}