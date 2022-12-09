import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nombreClinte!: string
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {

  }

}
