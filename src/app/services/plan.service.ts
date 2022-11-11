import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../interfaces/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private apiUrl = 'http://localhost:3000/Plan'
  constructor(private http: HttpClient) { }

  getPlanes():Observable<Plan[]>{
    return this.http.get<Plan[]>(this.apiUrl)
  }
}