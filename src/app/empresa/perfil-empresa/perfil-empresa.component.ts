import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Empresa } from 'src/app/interfaces/empresa.interface';
import { EmpresasService } from '../../services/empresa.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

//Iconos

import { ProductosService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/interfaces/producto.interface';
import { baseColors } from 'ng2-charts';


@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.scss']
})
export class PerfilEmpresaComponent implements OnInit {
  //Iconos
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  //Arreglos
  empresas!:Empresa[]
  productos!:Producto[]


  //Columnas de Tablas
  columnasTablaProducto = ['Nombre de Producto', 'Cantidad', 'Precio', 'Accion']
  //Grafica
  title = 'ng2-charts-demo';

    lineChartDataVentas: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],

    datasets: [
      {
        data: [ 45,50,55,55,60,65,70,75,70,65,70,80 ],
        label: 'Ventas',
        fill: true,
        tension: 0.5,
        borderColor: '#3b719d',
        backgroundColor: '#8ac1ea',
        pointBackgroundColor: '#134977',
      }
    ]
  };
    
  lineChartDataVisitas: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],

    datasets: [
      {
        data: [ 100,150,98,110,120,115,140,150,150,155,170,190 ],
        label: 'Visitas',
        fill: true,
        tension: 0.5,
        borderColor: '#3b719d',
        backgroundColor: '#8ac1ea',
        pointBackgroundColor: '#134977',
      }
    ]
  };

  lineChartOptions: ChartOptions<any> = {
    responsive: false,
  }

  lineChartLegend = true;
  
  // options


  constructor(
    private empresaSvs: EmpresasService,
    private productoSvs: ProductosService
    )
    {}

  ngOnInit(): void {
  
    this.empresaSvs.getEmpresas().pipe(
      tap((empresas:Empresa[]) => {
        this.empresas = empresas;
        console.log(this.empresas);
      })).subscribe();
  
    this.productoSvs.getProductos().pipe(
      tap((productos:Producto[]) => {
        this.productos = productos;
        console.log(this.productos);
      })).subscribe();
  }
}
  

  
