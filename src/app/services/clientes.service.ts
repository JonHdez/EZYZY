import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/cliente'
  constructor(private http: HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl);
  }
  newCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl,cliente);
  }
}
