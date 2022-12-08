import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService, private authToken: TokenService) { }

  ngOnInit(): void {

    // this.authservice.getCliente().subscribe({
    //   next:(res)=>{
    //     console.log(res);
    //   }
    // });
  }
  

  logout(){
    if (this.authservice.isLoggedIn()===true) {
      this.authToken.RemoveToken();
    } else {
      console.log(false);
    }
  }
}
