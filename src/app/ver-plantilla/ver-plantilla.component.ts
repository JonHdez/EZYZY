import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantillasService } from '../services/plantilla.service';

@Component({
  selector: 'app-ver-plantilla',
  templateUrl: './ver-plantilla.component.html',
  styleUrls: ['./ver-plantilla.component.scss']
})
export class VerPlantillaComponent implements OnInit {
  idPlantilla:string='';
  codigoHtmlPlantilla:any;
  codeHtmlId:any;
  constructor(private route: ActivatedRoute, private plantillaSvc:PlantillasService) { }

  pintarPlantilla(){
    const plantilla = document.querySelector('iframe')!.setAttribute('srcdoc', this.codigoHtmlPlantilla );
    /* console.log(this.codigoHtmlPlantilla) */
  }

  ngOnInit(): void {
    this.idPlantilla= this.route.snapshot.params['form1'];

    this.plantillaSvc.getPlantilla(this.idPlantilla).subscribe({
      next:(res)=>{
        document.querySelector('iframe')!.setAttribute('srcdoc', res.codigohtml );
      }
    });
    
  
  }

}
