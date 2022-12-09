import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/cliente/'
  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  getClientes():Observable<Cliente[]>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " +  this.tokenService.getToken(),
    });
    return this.http.get<Cliente[]>(this.apiUrl, {headers});
  }
  getClinte(id:string):Observable<Cliente>{
    return this.http.get<Cliente>(this.apiUrl + id);
  }
  newCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
  updateCliente(id:string, cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.apiUrl + id, cliente)
  }
}
