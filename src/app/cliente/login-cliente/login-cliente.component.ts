import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from 'src/app/interfaces/cliente.interface';
import {tap} from 'rxjs/operators';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent implements OnInit {
  minPw = 8;
  clientes!: Cliente[];
  constructor(private clienteSvc:ClientesService) { }

  hide = true;
  password= new FormControl('', [Validators.required, Validators.minLength(this.minPw)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.clienteSvc.getClientes().pipe(
      tap((clientes:Cliente[]) => {
        this.clientes = clientes
        console.log(this.clientes)

      }
      )
    )
    .subscribe();

  }
}

