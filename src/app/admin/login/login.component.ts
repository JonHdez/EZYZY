import { Administrador } from 'src/app/interfaces/administrador.interface';
import { AdministradorsService } from './../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  minPw = 5;

  public loginAdminForm!: FormGroup;
  adminAuth!:Administrador;

  constructor(private adminSvc: AdministradorsService,
              private formBuilder: FormBuilder, 
              private router:Router,
              private authService: AuthService,
              private tokenService: TokenService) { }

 password= new FormControl('', [Validators.required, Validators.minLength(this.minPw)]);
 correo = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {

    if (this.authService.isLoggedIn()===true) {
      this.tokenService.RemoveToken();
    } else {
      console.log(false);
    }

    this.loginAdminForm= this.formBuilder.group({
      correoAdmin:[''],
      contraseñaAdmin:['']
    });
  }

  loginAdmin(){

    this.adminAuth =({
      nombre:'',
      apellido: '',
      correo: this.correo.value!,
      pasword: this.password.value!,
      fotoUrl: ''
    });

    this.authService.loginAdmin(this.adminAuth).subscribe({
      next:(res)=>{
        this.tokenService.setToken(res.token);
        console.log(res);
        alert("Logeado exitosamente");
        this.router.navigate(['admin-perfil']);
      },
        error: error=>{
          alert("Usuario o contrasena no validos");
          console.log("error",error);
        }
      });
    }
  }
