import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/interfaces/token.interface';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent implements OnInit {

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

}
