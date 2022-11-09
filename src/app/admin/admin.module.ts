import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    HomeAdminComponent,

  ],

  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule
  ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class AdminModule { }
