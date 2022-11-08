import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent implements OnInit {
  clientes!: Cliente[];
  constructor(private clienteSvc: ClientesService) { }

  ngOnInit(): void {
    this.clienteSvc.getClientes().pipe(
      tap((clientes:Cliente[]) => {
        this.clientes = clientes
        console.log(this.clientes)

      }
      )
    )
    .subscribe();

  }

}
