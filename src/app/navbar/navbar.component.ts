import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private isloggedin: AuthService, private authToken: TokenService) { }

  ngOnInit(): void {
  }

  logout(){
    if (this.isloggedin.isLoggedIn()===true) {
      this.authToken.RemoveToken();
    } else {
      console.log(false);
    }
  }
}
