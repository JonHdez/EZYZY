import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/empresa.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/empresa'
  constructor(private http: HttpClient) { }

  getEmpresas():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.apiUrl)
  }
}