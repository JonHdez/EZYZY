import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';
import { Administrador } from '../interfaces/administrador.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/auth/'
  constructor(private http: HttpClient) { }

  loginCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'loginCliente', cliente)
  }

  registerCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'registerCliente', cliente)
  }

  loginAdmin(admin: Administrador): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'loginAdmin', admin)
  }

  registerAdmin(admin: Administrador): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'registerAdmin', admin)
  }

 
}