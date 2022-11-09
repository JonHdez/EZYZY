import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LandingPageComponent } from './../landing-page/landing-page/landing-page.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    LoginClienteComponent,
    RegistroClienteComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormControl,
    MatDividerModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormControl,
    MatDividerModule
  ]
})
export class ClienteModule { }
