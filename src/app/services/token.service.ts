import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private http: HttpClient) { }
  setToken(token: string): void {
    localStorage.setItem('token',token)
  }

  getToken(): string {
    return  localStorage.getItem('token')!;
  }

  RemoveToken(): void{
    localStorage.removeItem('token')!;
  }


}