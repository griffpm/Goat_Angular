import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoatsService } from '../goats.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail-goats',
  templateUrl: './detail-goats.component.html',
  styleUrls: ['./detail-goats.component.css']
})
export class DetailGoatsComponent implements OnInit {
  goat:any;
  goats:any;
  goatsService: any;
  loginbtn!: boolean;
  logoutbtn!: boolean;
  
  constructor( 
    private route: ActivatedRoute,
    private goatService: GoatsService,
    private router: Router,
    private dataService: ApiService
    )
      {
        dataService.getLoggedInName.subscribe(name=> this.changeName(name));
        if(this.dataService.isLoggedIn()){
          console.log("logged in");
          this.loginbtn=false;
          this.logoutbtn=true;
        } else {
          this.loginbtn=true;
          this.logoutbtn=false;
        }
      }
      private changeName(name: boolean): void {
        this.logoutbtn = name;
        this.loginbtn = !name;
        }
    
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
  this.goatService.deleteGoat(goat.id).subscribe((data: any)=>{
    this.goats = this.goats.filter((u: any) => u !== goat);
    this.router.navigate(['/goats']);
  })
}

  }