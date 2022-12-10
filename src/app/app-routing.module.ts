import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { Plan } from './interfaces/plan.interface';
import { RegistroClienteComponent } from './cliente/registro-cliente/registro-cliente.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginClienteComponent} from './cliente/login-cliente/login-cliente.component'
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { PerfilEmpresaComponent } from './empresa/perfil-empresa/perfil-empresa.component';
import { CodeBoxComponent } from './admin/code-box/code-box.component'
import { PlantillaComponent } from './plantilla/plantilla.component';
import { VerPlantillaComponent } from './ver-plantilla/ver-plantilla.component';
import { LoginGuard } from './guards/login.guard';
import { PerfilClienteComponent } from './cliente/perfil-cliente/perfil-cliente.component';

const routes: Routes = [
  {
    path: '', component:LandingPageComponent
  },
  {
    path: 'loginCliente', component:LoginClienteComponent, canActivate:[LoginGuard]
  },
  {
    path: 'admin-perfil', component: HomeAdminComponent
  },
  {
    path: 'admin', component: LoginComponent, canActivate:[LoginGuard]
  },
  {
    path: 'perfil-empresa', component: PerfilEmpresaComponent
  },
  {
    path: 'registroCliente', component:RegistroClienteComponent, canActivate:[LoginGuard]
  },
  {
    path: 'planes', component: PlanesComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'admin/code-box', component: CodeBoxComponent
  },
  {
    path: 'admin/code-box/:form1', component: CodeBoxComponent
  },
  {
    path: 'plantillas/:form1', component: VerPlantillaComponent
  },
  {
    path: 'plantillas', component: PlantillaComponent
  },
  {
    path: 'perfil-cliente', component: PerfilClienteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
