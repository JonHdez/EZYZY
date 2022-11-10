import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Administrador } from 'src/app/interfaces/administrador.interface';
import { AdministradorsService } from '../../services/administrador.service';
import { PlantillasService } from '../../services/plantilla.service';
import { Plantilla } from '../../interfaces/plantilla.interface';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  administradores!: Administrador[]
  plantillas!: Plantilla[];
  constructor(private administradorSvc: AdministradorsService,
              private plantillaSvc: PlantillasService) { }

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
      }
  }


