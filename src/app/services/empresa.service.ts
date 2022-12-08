import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/empresa.interface';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/empresa/'
  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  getEmpresas():Observable<Empresa[]>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " +  this.tokenService.getToken(),
    });
    return this.http.get<Empresa[]>(this.apiUrl, {headers})
  }
  newEmpresa(empresa: Empresa):Observable<Empresa>{
    return this.http.post<Empresa>(this.apiUrl,empresa);
  }
}