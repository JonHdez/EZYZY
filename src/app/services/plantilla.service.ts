import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plantilla } from '../interfaces/plantilla.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantillasService {
  private apiUrl = 'http://localhost:3000/Plantilla'
  constructor(private http: HttpClient) { }

  getPlantillas():Observable<Plantilla[]>{
    return this.http.get<Plantilla[]>(this.apiUrl)
  }
}