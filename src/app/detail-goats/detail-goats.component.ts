import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Goat } from '../goat';
import { GoatsService } from '../goats.service';

@Component({
  selector: 'app-detail-goats',
  templateUrl: './detail-goats.component.html',
  styleUrls: ['./detail-goats.component.css']
})
export class DetailGoatsComponent implements OnInit {
  // goatList: Goat[] = [];
  goat: Goat|undefined;
  
  constructor( 
    private route: ActivatedRoute,
    private goatService: GoatsService){}
    
    // ngOnInit(){
    //   const goatId: string|null = this.route.snapshot.paramMap.get('id');
    //   if(goatId){
    //     this.goat = this.goatList.find(goat=>goat.id == +goatId);
    //     console.log(goatId);
    //   }

    // }
    ngOnInit() {
      const goatId: string | null = this.route.snapshot.paramMap.get('id');
      if (goatId) {
        this.goatService.getSingleGoat(goatId).subscribe({
          next: (goat: Goat) => {
            this.goat = goat;
            console.log(this.goat);
            console.log(goatId);
            console.log(goat);
          },
          error: (error: any) => {
            console.error(error);
          }
        });}}}
