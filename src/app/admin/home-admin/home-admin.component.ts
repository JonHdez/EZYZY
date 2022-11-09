import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Administrador } from 'src/app/interfaces/administrador.interface';
import { AdministradorsService } from '../../services/administrador.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  administradores!: Administrador[]
  constructor(private administradorSvc: AdministradorsService) { }

  ngOnInit(): void {
    this.administradorSvc.getAdministradors().pipe(
      tap((administradores:Administrador[]) => {
        this.administradores = administradores;
        console.log(this.administradores);
      })).subscribe();
  }

}
