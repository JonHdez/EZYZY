import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../interfaces/administrador.interface';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorsService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/admin/'
  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  getAdmin():Observable<Administrador[]>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " +  this.tokenService.getToken(),
    });
    return this.http.get<Administrador[]>(this.apiUrl, {headers})
  }

  newAdmin(admin: Administrador):Observable<Administrador>{
    return this.http.post<Administrador>(this.apiUrl,admin);
  }
}