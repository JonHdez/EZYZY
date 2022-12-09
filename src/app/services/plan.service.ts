import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../interfaces/plan.interface';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private apiUrl = 'https://backend-ezyzy-production.up.railway.app/plan/'
  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  getPlanes():Observable<Plan[]>{
      const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " +  this.tokenService.getToken(),
    });
    return this.http.get<Plan[]>(this.apiUrl, {headers})
  }

  newPlan(plan: Plan):Observable<Plan>{
    return this.http.post<Plan>(this.apiUrl,plan);
  }

  updatePlan(plan: Plan):Observable<Plan>{
    return this.http.put<Plan>(this.apiUrl, plan)
  }

  deletePlan(id:string): Observable<Plan>{
    return this.http.delete<Plan>(this.apiUrl+id)
  }
}