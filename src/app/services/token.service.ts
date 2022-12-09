import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isAdminBool:boolean = true
  payload:any

  constructor(private http: HttpClient) {}
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }

  RemoveToken(): void {
    localStorage.removeItem('token')!;
  }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  decodedToken(token: any): Observable<any> {
    return this.http.post<any>(
      'https://backend-ezyzy-production.up.railway.app/auth/yo',
      token
    );
  }

  isAdmin(): any {
    let bool:boolean
    if (!this.isLogged()) {
      return false
    }
    this.decodedToken({ token: this.getToken() }).subscribe({
      next: (res) => {
        this.payload = res
      },
    });

    if (!this.payload.isAdmin){
      bool = false
    }else {
      bool = true
    }

    return bool
  }
}
