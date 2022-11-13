import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { Seccion2Component } from './home/seccion2/seccion2.component';
import { CarruselComponent } from './home/carrusel/carrusel.component';
import { HomeComponent } from './home/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { RegistroClienteComponent } from './cliente/registro-cliente/registro-cliente.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginClienteComponent } from './cliente/login-cliente/login-cliente.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PerfilEmpresaComponent } from './empresa/perfil-empresa/perfil-empresa.component';
import { NgChartsModule } from 'ng2-charts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TarjetasPlanComponent } from './tarjetas-plan/tarjetas-plan.component';
import { PlanesComponent } from './planes/planes.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { Seccion3Component } from './home/seccion3/seccion3.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginClienteComponent,
    HomeAdminComponent,
    PerfilEmpresaComponent,
    RegistroClienteComponent,
    NavbarComponent,
    TarjetasPlanComponent,
    PlanesComponent,
    HomeComponent,
    CarruselComponent,
    Seccion2Component,
    Seccion3Component,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    FontAwesomeModule,
    NgChartsModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule
  ],
  exports:[FooterComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
