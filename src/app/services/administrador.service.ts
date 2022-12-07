import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../interfaces/administrador.interface';

@Injectable({
  providedIn: 'root'
})
export class AdministradorsService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/admin'
  constructor(private http: HttpClient) { }

  getAdmin():Observable<Administrador[]>{
    return this.http.get<Administrador[]>(this.apiUrl)
  }

  newAdmin(admin: Administrador):Observable<Administrador>{
    return this.http.post<Administrador>(this.apiUrl,admin);
  }
}