import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
