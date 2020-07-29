import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';



const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
 
    {path:"home",component:HomeComponent},
    
    {path:"login",component:LoginComponent},
    {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
