import { PlantillasService } from './../../services/plantilla.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent implements OnInit {

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
    console.log(html)
    return html;
  }
  
  ngOnInit(): void {
    this.idPlantilla= this.route.snapshot.params['form1'];
    console.log('hue: ', this.route.snapshot.params['form1'])

    this.plantillaSvc.getPlantilla(this.idPlantilla).subscribe({
      next:(res)=>{
        const styleA = res.codigohtml.indexOf('<style>')
        const styleB = res.codigohtml.indexOf('</style>')
        const finalHtml = res.codigohtml.indexOf('</html>')
        const html1 = res.codigohtml.substring(0, styleA)
        const html2 = res.codigohtml.substring(styleB , finalHtml + 7)
        const htmlCompleto = html1 + html2
        const css = res.codigohtml.substring(styleA + 7, styleB)
        this.$css = css;
        this.$html= htmlCompleto;
        console.log(htmlCompleto)
        this.update();
      }
    });
  }
}
