import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoatsService } from '../goats.service';

@Component({
  selector: 'app-detail-goats',
  templateUrl: './detail-goats.component.html',
  styleUrls: ['./detail-goats.component.css']
})
export class DetailGoatsComponent implements OnInit {
  // goatList: Goat[] = [];
  goat:any;
  // goat: Goat|undefined;
  
  constructor( 
    private route: ActivatedRoute,
    private goatService: GoatsService,
    ){}
    
ngOnInit() {
      const goatId: string | null = this.route.snapshot.paramMap.get('id');
      if (goatId) {
        this.goatService.getSingleGoat(goatId).subscribe(
          (result: any) => {
            this.goat = result.data;
            console.log(result.data);
            console.log(goatId);
            
          }
        );
}}
  }