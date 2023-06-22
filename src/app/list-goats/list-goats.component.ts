import { Component, OnInit } from '@angular/core';
import { Goat } from '../goat';
import { Router } from '@angular/router';
import { GoatsService } from '../goats.service';

@Component({
  selector: 'app-list-goats',
  templateUrl: './list-goats.component.html',
  styleUrls: ['./list-goats.component.css']
})
export class ListGoatsComponent implements OnInit {
  //goatList : Goat[] = GOATS; // via data-goats
  goats:any;
  goatsService: any;

  constructor(
    private router: Router,
    private goatservice: GoatsService){}

  ngOnInit(): void {
    this.goatservice.getGoats().subscribe(
      (result:any)=>{
        //console.log(result);
        this.goats = result.data;
      }
    )
  }

  goToGoat(goat: Goat){
    this.router.navigate(['/goat', goat.id]);
  }

}

