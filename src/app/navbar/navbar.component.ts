import { Token } from './../interfaces/token.interface';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token!:Token;
  info:any;

  constructor(private authservice: AuthService, private authToken: TokenService) { 
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
     this.authToken.isAdmin().then((res)=>{console.log(res)});
  }

  logout(){
    if (this.authservice.isLoggedIn()===true) {
      this.authToken.RemoveToken();
    } else {
      console.log(false);
    }
  }
}
