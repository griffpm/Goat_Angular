import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoatsService } from '../goats.service';
@Component({
  selector: 'app-add-goats',
  templateUrl: './add-goats.component.html',
  styleUrls: ['./add-goats.component.css']
})

export class AddGoatsComponent {
  addForm:any;
  vals ='';
  data = this.vals.split(',');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private goatService: GoatsService
  ){
    this.addForm = this.formBuilder.group({
        first_name: ['', Validators.required],  
        last_name: ['', [Validators.required, Validators.maxLength(20)]],  
        company: ['', [Validators.required, Validators.maxLength(20)]] ,
        date_of_birth: ['', [Validators.required, Validators.maxLength(20)]] ,
        url_img: ['', [Validators.required, Validators.maxLength(20)]] ,
  }
  )
}
  onSubmit(){
    this.goatService.createGoat(this.addForm.value).subscribe(
      (data:any)=>{
        this.router.navigate(['/']);
      },
      (      error: any)=>{
        alert(error);
      });
  }
}
