import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Plantilla } from '../interfaces/plantilla.interface';
import { PlantillasService } from '../services/plantilla.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
  plantillas!: Plantilla[];
  constructor(private plantillaSvc: PlantillasService,) { }

  verPlantilla(id: any) {
    console.log(id)

  }
  ngOnInit(): void {
    this.plantillaSvc
    .getPlantillas()
    .pipe(
      tap((plantillas: Plantilla[]) => {
        this.plantillas = plantillas;
        console.log(this.plantillas);
      })
    )
    .subscribe();
  }

}
