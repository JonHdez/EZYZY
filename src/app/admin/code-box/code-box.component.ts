import { PlantillasService } from './../../services/plantilla.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plantilla } from 'src/app/interfaces/plantilla.interface';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
})
export class CodeBoxComponent implements OnInit {
  codeHtmlId: any;
  $js: string = '';
  $css: string = '';
  $html: string = '';
  idPlantilla: string = '';

  nuevaPlantilla: any = {
    tituloDePlantilla: '',
    descripcionPlantilla: '',
    codigohtml: '',
  };

  constructor(
    private route: ActivatedRoute,
    private plantillaSvc: PlantillasService
  ) {}

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
    `;
  };

  $ = (selector: any) => document.querySelector(selector);

  update = () => {
    const html = this.createHtml();

    this.$('iframe').setAttribute('srcdoc', html);
  };

  guardarHtml() {
    const html = this.createHtml();
    this.nuevaPlantilla.codigohtml = html;
    this.plantillaSvc
      .newPlantilla(this.nuevaPlantilla)
      .subscribe({ next: (res) => {
        console.log(res)
      } });
      alert('Se agrego la Nueva Plantilla')

  }

  ngOnInit(): void {
    this.idPlantilla = this.route.snapshot.params['form1'];

    this.plantillaSvc.getPlantilla(this.idPlantilla).subscribe({
      next: (res) => {
        const styleA = res.codigohtml.indexOf('<style>');
        const styleB = res.codigohtml.indexOf('</style>');
        const html1 = res.codigohtml.substring(0, styleA);
        const finalHtml = res.codigohtml.indexOf('</html>');
        const html2 = res.codigohtml.substring(styleB, finalHtml + 7);
        const htmlCompleto = html1 + html2;
        const css = res.codigohtml.substring(styleA + 7, styleB);
        this.$css = css;
        this.$html = htmlCompleto;
        this.update();
      },
    });
  }
}
