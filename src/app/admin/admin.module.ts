import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    HomeAdminComponent,

  ],

  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule
  ],

  exports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class AdminModule { }
