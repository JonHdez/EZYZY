
import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from 'src/app/interfaces/cliente.interface';
import {tap} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

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
  minPw = 8;
  clientes!: Cliente[];
  constructor(private clienteSvc:ClientesService, private formBuilder: FormBuilder, private router:Router) { }

  cliente:any=[];
  indexArrayCliente:any=[];
  hide = true;
  password= new FormControl('', [Validators.required, Validators.minLength(this.minPw)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
        
    this.loginForm= this.formBuilder.group({
      correo:[''],
      contraseña:['']
    });
    
    this.clienteSvc.getClientes().pipe(
      tap((clientes:Cliente[]) => {
        this.clientes = clientes
        console.log(this.clientes)

      }
      )
    )
    .subscribe();


  }

  login(){
    this.clienteSvc.getClientes()
    .subscribe(res=>{
        const usuario = res.find((a:any)=>{
          console.log('vairbale y contrasenia', a.correo, a.pasword)
          console.log('vairbale y contrasenia log', this.loginForm.value.correo, this.loginForm.value.contraseña)
          return a.correo === this.loginForm.value.correo && a.pasword === this.loginForm.value.contraseña
        });
        if(usuario){
          alert("Logeado exitosamente");
          this.loginForm.reset();
          this.router.navigate(['home']);

        }else{
          
          alert('Usuario no encontrado')
        }
        },
        error=>{
          console.log(error);
      });
    }
  }


// const usuario =
// this.cliente.forEach((el: any, i: any) => {
// this.indexArrayCliente.push(i);
// return this.cliente[i].correo === this.loginForm.value.correo && this.cliente[i].pasword === this.loginForm.value.contraseña