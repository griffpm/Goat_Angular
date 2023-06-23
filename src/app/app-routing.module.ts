import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGoatsComponent } from './add-goats/add-goats.component';
import { EditGoatsComponent } from './edit-goats/edit-goats.component';
import { ListGoatsComponent } from './list-goats/list-goats.component';
import { DetailGoatsComponent } from './detail-goats/detail-goats.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // {path: '', redirectTo:'goats', pathMatch:'full'},
  { path: '', component: ListGoatsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-goat', component: AddGoatsComponent},
  { path: 'goats', component: ListGoatsComponent},
  { path:'edit/:id', component: EditGoatsComponent},
  { path: 'goat/:id', component: DetailGoatsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
