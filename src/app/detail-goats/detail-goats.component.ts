import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GOATS } from '../data-goats';
import { Goat } from '../goat';

@Component({
  selector: 'app-detail-goats',
  templateUrl: './detail-goats.component.html',
  styleUrls: ['./detail-goats.component.css']
})
export class DetailGoatsComponent implements OnInit {
  goatList!: Goat[];
  goat: Goat|undefined;

  constructor( 
    private route: ActivatedRoute,
    private router: Router){}
    
    ngOnInit(){
      this.goatList = GOATS;
      const goatId: string|null = this.route.snapshot.paramMap.get('id');
      if(goatId){
        this.goat = this.goatList.find(goat=>goat.id == +goatId);
        console.log(goatId);
      }

    }
}
