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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGoatsComponent,
    DetailGoatsComponent,
    PageNotFoundComponent,
    AddGoatsComponent,
    EditGoatsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    
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
