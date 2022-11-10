import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LoginComponent,
    HomeAdminComponent,

  ],

  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule
  ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class AdminModule { }
