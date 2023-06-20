import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGoatsComponent } from './list-goats/list-goats.component';
import { DetailGoatsComponent } from './detail-goats/detail-goats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddGoatsComponent } from './add-goats/add-goats.component';
import { EditGoatsComponent } from './edit-goats/edit-goats.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGoatsComponent,
    DetailGoatsComponent,
    PageNotFoundComponent,
    AddGoatsComponent,
    EditGoatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
