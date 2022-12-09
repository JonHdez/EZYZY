
import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from 'src/app/interfaces/cliente.interface';
import {tap} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { TokenService } from '../../services/token.service'

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

  public loginForm!: FormGroup;
  clienteAuth!:Cliente;
  minPw = 5;
  clientes!: Cliente[];
  constructor(private clienteSvc: ClientesService, 
              private formBuilder: FormBuilder, 
              private router: Router,
              private authService: AuthService,
              private tokenService: TokenService) { }

  cliente:any=[];
  indexArrayCliente:any=[];
  hide = true;
  password= new FormControl('', [Validators.required, Validators.minLength(this.minPw)]);
  correo = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {

    if (this.authService.isLoggedIn()===true) {
      this.tokenService.RemoveToken();
    } else {
      console.log(false);
    }
        
    this.loginForm= this.formBuilder.group({
      correo:[''],
      contraseña:['']
    });
    
 
  }

  login(){

    this.clienteAuth =({
      nombre:'',
      Apellido: '',
      correo: this.correo.value!,
      pasword: this.password.value!,
      fotoUrl: '',
      status: ''
    });

    this.authService.loginCliente(this.clienteAuth).subscribe({
      next:(res)=>{
        this.tokenService.setToken(res.token);
        console.log(res);
        this.router.navigate(['home']);
      },
        error: error=>{
          alert("Usuario o contrasena no validos");
          console.log("error",error);
        }
      });

        
    }
  }


// const usuario =
// this.cliente.forEach((el: any, i: any) => {
// this.indexArrayCliente.push(i);
// return this.cliente[i].correo === this.loginForm.value.correo && this.cliente[i].pasword === this.loginForm.value.contraseña