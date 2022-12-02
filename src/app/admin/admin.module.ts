import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CodeBoxComponent } from './code-box/code-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
        HomeAdminComponent,
        CodeBoxComponent
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatTabsModule,
        MatGridListModule,
        MatIconModule,
        MatTableModule,
        MatListModule,
        MatFormFieldModule,
        FormsModule,


    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatTabsModule,
        MatGridListModule,
        MatIconModule,
        MatTableModule,
        MatListModule,
        MatFormFieldModule,
        FormsModule,

    ]
})
export class AdminModule { }
