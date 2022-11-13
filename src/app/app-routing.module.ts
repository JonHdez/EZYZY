import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginClienteComponent} from './cliente/login-cliente/login-cliente.component'
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { PerfilEmpresaComponent } from './empresa/perfil-empresa/perfil-empresa.component';


const routes: Routes = [
  {
    path: '', component:LandingPageComponent
  },
  {
    path: 'loginCliente', component:LoginClienteComponent
  },
  {
    path: 'admin-companies', component: HomeAdminComponent
  },
  {
    path: 'perfil-empresa', component: PerfilEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
