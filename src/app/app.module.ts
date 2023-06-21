import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddGoatsComponent } from './add-goats/add-goats.component';
import { ListGoatsComponent } from './list-goats/list-goats.component';
import { EditGoatsComponent } from './edit-goats/edit-goats.component';
import { DetailGoatsComponent } from './detail-goats/detail-goats.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGoatsComponent,
    DetailGoatsComponent,
    PageNotFoundComponent,
    AddGoatsComponent,
    EditGoatsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
