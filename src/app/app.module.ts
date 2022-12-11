import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AddRocketComponent } from './add-rocket/add-rocket.component';
import { FormsModule } from '@angular/forms';
import { UpdateRocketComponent } from './update-rocket/update-rocket.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginIndexComponent } from './login-index/login-index.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchNameComponent } from './search-name/search-name.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    AddRocketComponent,
    UpdateRocketComponent,
    ProfileComponent,
    LoginIndexComponent,
    ForbiddenComponent,
    SearchNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
