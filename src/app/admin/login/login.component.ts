import { AdministradorsService } from './../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginAdminForm!: FormGroup;

  constructor(private adminSvc: AdministradorsService,
              private formBuilder: FormBuilder, 
              private router:Router,
              private authService: AuthService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loginAdminForm= this.formBuilder.group({
      correoAdmin:[''],
      contraseñaAdmin:['']
    });
  }

  loginAdmin(){
    this.adminSvc.getAdmin()
    .subscribe(res=>{
        const usuarioAdmin = res.find((a:any)=>{
          console.log('vairbale y contrasenia', a.correo, a.pasword)
          console.log('vairbale y contrasenia log', this.loginAdminForm.value.correoAdmin, this.loginAdminForm.value.contraseñaAdmin)
          return a.correo === this.loginAdminForm.value.correoAdmin && a.pasword === this.loginAdminForm.value.contraseñaAdmin
        });
        if(usuarioAdmin){
          alert("Logeado exitosamente");
          this.loginAdminForm.reset();
          this.router.navigate(['admin-perfil']);

        }else{
          
          alert('Usuario no encontrado')
        }
        },
        error=>{
          console.log(error);
      });
    }
  }
