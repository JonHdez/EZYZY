import { Token } from './../interfaces/token.interface';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token!:Token;
  info:any;
  isAdmin!:boolean

  constructor(private authservice: AuthService, private authToken: TokenService,private router: Router) { 
    this.token={"token":this.authToken.getToken()}

    this.authToken.decodedToken(this.token).subscribe({
      next: res=>{
        this.info=res;
      },
      error: error=>{
        console.log(error);
      }
    });
  }
  

  ngOnInit(): void {
  
  }
  
  validateUser(){
     if (this.info.isAdmin==='true') {
      this.isAdmin=true
      this.router.navigate(['/admin-perfil']);
     } else {
      this.isAdmin=false
      this.router.navigate(['/perfil-cliente']);
     }
     console.log('es admin?: ', this.isAdmin)
     return this.isAdmin
  }

  logout(){
    if (this.authservice.isLoggedIn()===true) {
      this.authToken.RemoveToken();
    } else {
      console.log(false);
    }
  }
}
