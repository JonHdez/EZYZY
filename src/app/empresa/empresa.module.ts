import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';

import { EdicionPaginaEmpresaComponent } from './edicion-pagina-empresa/edicion-pagina-empresa.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    NgChartsModule
  ],
  exports: [
    MatTabsModule,
    MatTableModule,
    NgChartsModule

  ]
})
export class EmpresaModule { }
