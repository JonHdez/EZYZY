import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Plantilla } from 'src/app/interfaces/plantilla.interface';
import { PlantillasService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-seccion2',
  templateUrl: './seccion2.component.html',
  styleUrls: ['./seccion2.component.scss']
})
export class Seccion2Component implements OnInit {

  private form1="";
  plantillas!: Plantilla[];
  codigoHtmlPlantilla:any;
  constructor(
    private plantillaSvc: PlantillasService,
    private router: Router
    ) {}

  verPlantilla(id:any) {
    console.log(id)
    this.getPlantilla(id)
    this.form1= id;
    this.router.navigate(["/plantillas/"+this.form1], )
  }

  getPlantilla(id: string){
      this.plantillaSvc.getPlantilla(id).subscribe({
      next:(res)=>{
        this.codigoHtmlPlantilla = res.codigohtml;
        console.log(`codigo plantilla ${res.tituloDePlantilla}`,this.codigoHtmlPlantilla);
      }
    });
  }

  ngOnInit(): void {
    this.plantillaSvc
    .getPlantillas()
    .pipe(
      tap((plantillas: Plantilla[]) => {
        this.plantillas = plantillas;
      })
    )
    .subscribe();
  }

}
