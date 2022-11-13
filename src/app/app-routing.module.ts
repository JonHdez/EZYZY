import { HomeComponent } from './home/home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { Plan } from './interfaces/plan.interface';
import { RegistroClienteComponent } from './cliente/registro-cliente/registro-cliente.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginClienteComponent} from './cliente/login-cliente/login-cliente.component'


const routes: Routes = [
  {
    path: '', component:LandingPageComponent
  },
  {
    path: 'loginCliente', component:LoginClienteComponent
  },
  {
    path: 'registroCliente', component:RegistroClienteComponent
  },
  {
    path: 'planes', component: PlanesComponent
  },
  {
    path: 'home', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
