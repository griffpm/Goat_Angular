import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoatsService } from '../goats.service';
import { Goat } from '../goat';

@Component({
  selector: 'app-detail-goats',
  templateUrl: './detail-goats.component.html',
  styleUrls: ['./detail-goats.component.css']
})
export class DetailGoatsComponent implements OnInit {
  // goatList: Goat[] = [];
  goat:any;
  goats:any;
  goatsService: any;
  dataService: any;
  // goat: Goat|undefined;
  
  constructor( 
    private route: ActivatedRoute,
    private goatService: GoatsService,
    private router: Router,
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
      }
      this.goatService.getGoats().subscribe(
        (result:any)=>{
          //console.log(result);
          this.goats = result.data;
        })

}

deleteGoat(goat:any){
  //console.log(id);
  this.goatsService.deleteGoat(goat.id).subscribe((data: any)=>{
    this.goats = this.goats.filter((u: any) => u !== goat);
    this.router.navigate(['/']);
  })
}

  }