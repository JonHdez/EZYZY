import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginClienteComponent} from './cliente/login-cliente/login-cliente.component'
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';


const routes: Routes = [
  {
    path: '', component:LandingPageComponent
  },
  {
    path: 'loginCliente', component:LoginClienteComponent
  },
  {
    path: 'admin-companies', component: HomeAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
