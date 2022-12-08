import { PlantillasService } from './../../services/plantilla.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent implements OnInit {

  codigoHtmlPlantilla:any;
  codeHtmlId:any;
  $js: string = '';
  $css: string = '';
  $html: string = '';
  idPlantilla:string='';


  constructor(private route: ActivatedRoute, private plantillaSvc:PlantillasService) {

  }

  createHtml = () => {
    const html = this.$html;
    const css = this.$css;
    const js = this.$js;

    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
      ${html}
      <script>
        ${js}
      </script>
      </body>
    </html>
    `
  }

  $ = (selector: any) => document.querySelector(selector)

  update = () => {
    const html = this.createHtml();
    this.$('iframe').setAttribute('srcdoc', html )
  }

  guardarHtml() {
    const html = this.createHtml();
    return html;
  }
  
  ngOnInit(): void {
    this.idPlantilla= this.route.snapshot.params['form1'];
    console.log('hue: ', this.route.snapshot.params['form1'])

    this.plantillaSvc.getPlantilla(this.idPlantilla).subscribe({
      next:(res)=>{
        this.codigoHtmlPlantilla = res.codigohtml;
        console.log(`codigo plantilla en CodeBox ${res.tituloDePlantilla}`,this.codigoHtmlPlantilla);
        this.$html=this.codigoHtmlPlantilla;
        this.update();
      }
    });
  }
}
