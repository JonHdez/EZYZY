
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent implements OnInit {


  
  $js: string = '';
  $css: string = '';
  $html: string = '';


  constructor() {

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

  }


}
