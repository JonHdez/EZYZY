import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  payload:any
  isAdminBool!:boolean

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

  async isAdmin(): Promise<boolean> {

    if (!this.isLogged()) {
      return this.isAdminBool
    }
      this.decodedToken({ token: this.getToken() }).subscribe({
      next: (res) => {
        this.payload = res;
        this.isAdminBool = this.payload.isAdmin === 'true'
      },
    });
    return this.isAdminBool
  }
}
