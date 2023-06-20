import { Component } from '@angular/core';
import { GOATS } from '../data-goats';
import { Goat } from '../goat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-goats',
  templateUrl: './list-goats.component.html',
  styleUrls: ['./list-goats.component.css']
})
export class ListGoatsComponent {
  goatList : Goat[] = GOATS;

  constructor(private router: Router){}

  goToGoat(goat: Goat){
    this.router.navigate(['/goat', goat.id]);
  }
}
