import { RocketGuard } from './rocket.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketsComponent } from './rockets/rockets.component';
import { AddRocketComponent } from './add-rocket/add-rocket.component';
import { UpdateRocketComponent } from './update-rocket/update-rocket.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginIndexComponent } from './login-index/login-index.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CanActivate } from '@angular/router';
import { SearchNameComponent } from './search-name/search-name.component';
const routes: Routes = [
  { path: 'rockets', component: RocketsComponent },
  { path: 'add-rocket', component: AddRocketComponent , canActivate:[RocketGuard]},
  {path: '', redirectTo: '/rockets', pathMatch: 'full'},
  { path: 'updaterocket/:id', component: UpdateRocketComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginIndexComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  {path: "searchName", component: SearchNameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
