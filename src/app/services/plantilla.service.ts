import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plantilla } from '../interfaces/plantilla.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantillasService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/plantilla'
  constructor(private http: HttpClient) { }

  getPlantillas():Observable<Plantilla[]>{
    return this.http.get<Plantilla[]>(this.apiUrl)
  }
  
  newPlantilla(plantilla: Plantilla):Observable<Plantilla>{
    return this.http.post<Plantilla>(this.apiUrl,plantilla);
  }
}