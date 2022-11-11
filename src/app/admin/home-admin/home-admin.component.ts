import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Administrador } from 'src/app/interfaces/administrador.interface';
import { AdministradorsService } from '../../services/administrador.service';
import { PlantillasService } from '../../services/plantilla.service';
import { Plantilla } from '../../interfaces/plantilla.interface';
import { Plan } from 'src/app/interfaces/plan.interface';
import { PlansService } from 'src/app/services/plan.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  faPlus = faPlus;
  faPenToSquare = faPenToSquare
  faTrash = faTrash
  administradores!: Administrador[]
  plantillas!: Plantilla[];
  planes!:Plan[];
  columnasTablaPlan: string[] = ['Tipo de Plan', 'Precio', 'Accion'] 
  
  constructor(
              private administradorSvc: AdministradorsService,
              private plantillaSvc: PlantillasService,
              private planesSvc: PlansService
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
  }
  }


