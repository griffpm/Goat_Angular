import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGoatsComponent } from './list-goats/list-goats.component';
import { DetailGoatsComponent } from './detail-goats/detail-goats.component';

const routes: Routes = [
  {path: 'goats', component: ListGoatsComponent},
  {path: 'goat/:id', component: DetailGoatsComponent},
  {path: '', redirectTo:'goats', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
