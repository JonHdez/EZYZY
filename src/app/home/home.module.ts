import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './carrusel/carrusel.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { Seccion3Component } from './seccion3/seccion3.component';





@NgModule({
  declarations: [
  
    CarruselComponent,
       Seccion2Component,
       Seccion3Component
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
