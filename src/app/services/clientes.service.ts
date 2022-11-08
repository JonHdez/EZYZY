import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:3000/Cliente'
  constructor(private http: HttpClient) { }

  getClientes():Observable<any>{
    return this.http.get<Cliente[]>(this.apiUrl);
  }
}