import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {

  public  registroForm!: FormGroup;
  clienteRegistro!: Cliente;
  hide = true;

  minPw = 8;
  maxN=20;
  constructor(private formBuilder:FormBuilder, private registrocliente:ClientesService) { }


  apellido= new FormControl('', [Validators.required, Validators.maxLength(this.maxN)]);
  nombre= new FormControl('', [Validators.required, Validators.maxLength(this.maxN)]);
  password= new FormControl('', [Validators.required, Validators.pattern(
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
  )]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  

  matcher = new MyErrorStateMatcher();

   

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      primerNombre: [''],
      primerApellido : [''],
      correo: [''],
    })
    console.log('entrada', this.registroForm.value)
  }

  

  registro(){

    if ((this.password.hasError('required')||  this.password.hasError('pattern')|| this.apellido.hasError('required') ||
    this.nombre.hasError('required') || this.emailFormControl.hasError('required') || 
    this.emailFormControl.hasError('email') === true)&& (!this.apellido.hasError('required') ||
    !this.emailFormControl.hasError('required')===false)){

      console.log('password error',this.password.hasError('required'),
      this.emailFormControl.hasError('required'))
      alert('Rellene todos los campos correctamente')
    } else {
      this.registroForm = this.formBuilder.group({
        primerNombre: [this.nombre.value],
        primerApellido : [this.apellido.value],
        correo: [this.emailFormControl.value],
        contraseña:[this.password.value],
        foto:[''],
        status:['Activa']
      })

      this.clienteRegistro=({
        nombre:this.nombre.value!,
        Apellido:this.apellido.value!,
        correo:this.emailFormControl.value!,
        pasword:this.password.value!,
        fotoUrl:'',
        status:'Activa'
      })
      console.log('password error',this.password.hasError('pattern'))
      console.log('as',this.clienteRegistro)
    }

  }
}
