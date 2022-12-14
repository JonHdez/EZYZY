import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Plantilla } from '../interfaces/plantilla.interface';
import { TokenService } from './token.service';




@Injectable({
  providedIn: 'root'
})
export class PlantillasService {

  
  private codeHtml = new Subject<any>();
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/plantilla/'
  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  

  getPlantillas():Observable<Plantilla[]>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " +  this.tokenService.getToken(),
    });
    return this.http.get<Plantilla[]>(this.apiUrl, {headers})
  }
  getPlantilla(id:string):Observable<Plantilla>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " +  this.tokenService.getToken(),
    });
    return this.http.get<Plantilla>(this.apiUrl+id , {headers})
  }
  
  newPlantilla(plantilla: any):Observable<any>{
    return this.http.post<any>(this.apiUrl,plantilla);
  }
}