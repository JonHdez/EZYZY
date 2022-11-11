import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Administrador } from 'src/app/interfaces/administrador.interface';
import { AdministradorsService } from '../../services/administrador.service';
import { PlantillasService } from '../../services/plantilla.service';
import { Plantilla } from '../../interfaces/plantilla.interface';
import { Plan } from 'src/app/interfaces/plan.interface';
import { PlansService } from 'src/app/services/plan.service';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Empresa } from 'src/app/interfaces/empresa.interface';
import { EmpresasService } from '../../services/empresa.service';

//Iconos
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  //Iconos
  faCheck = faCheck;
  faXmark = faXmark;
  faPlus = faPlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  //Arreglos
  administradores!: Administrador[]
  plantillas!: Plantilla[];
  planes!:Plan[];
  clientes!:Cliente[];
  empresas!:Empresa[]

  //Columnas de Tablas
  columnasTablaPlan: string[] = ['Tipo de Plan', 'Precio', 'Accion'] 
  columnasTablaCuentas: string[] = ['Nombre de la Empresa', 'Nombre del Dueño', 'Status','Accion'] 
  
  constructor(
              private administradorSvc: AdministradorsService,
              private plantillaSvc: PlantillasService,
              private planesSvc: PlansService,
              private clienteSvs: ClientesService,
              private empresaSvs: EmpresasService
             ) { }

  ngOnInit(): void {
    this.administradorSvc.getAdministradors().pipe(
      tap((administradores:Administrador[]) => {
        this.administradores = administradores;
        console.log(this.administradores);
      })).subscribe();
      
    this.plantillaSvc.getPlantillas().pipe(
      tap((plantillas:Plantilla[]) => {
        this.plantillas = plantillas;
        console.log(this.plantillas);
      })).subscribe();

    this.planesSvc.getPlanes().pipe(
      tap((planes:Plan[]) => {
        this.planes = planes;
        console.log(this.planes);
      })).subscribe();

    this.clienteSvs.getClientes().pipe(
      tap((clientes:Cliente[]) => {
        this.clientes = clientes;
        console.log(this.clientes);
      })).subscribe();

    this.empresaSvs.getEmpresas().pipe(
      tap((empresas:Empresa[]) => {
        this.empresas = empresas;
        console.log(this.empresas);
      })).subscribe();
  }
  }


