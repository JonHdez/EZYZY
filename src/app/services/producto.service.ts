import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/Productos'
  constructor(private http: HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl)
  }
}