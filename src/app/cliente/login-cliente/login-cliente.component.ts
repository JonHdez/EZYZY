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
  constructor(private cliente: ClientesService) {
    this.cliente.getClientes().pipe(
      tap((clientes:Cliente[]) => {
        this.cliente = cliente
      }
      )
    )
   }

  ngOnInit(): void {
  }

}
