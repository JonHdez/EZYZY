import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Administrador } from 'src/app/interfaces/administrador.interface';
import { AdministradorsService } from '../../services/administrador.service';
import { PlantillasService } from '../../services/plantilla.service';
import { Plantilla } from '../../interfaces/plantilla.interface';
import { Plan } from 'src/app/interfaces/plan.interface';
import { PlansService } from 'src/app/services/plan.service';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Empresa } from 'src/app/interfaces/empresa.interface';
import { EmpresasService } from '../../services/empresa.service';

//Iconos
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Token } from 'src/app/interfaces/token.interface';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent implements OnInit {

  token!:Token;
  info:any;
  private form1 = '';

  //Iconos
  faCheck = faCheck;
  faXmark = faXmark;
  faPlus = faPlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  //Arreglos
  administradores!: Administrador[];
  plantillas!: Plantilla[];
  planes!: Plan[];
  clientes!: Cliente[];
  empresas!: Empresa[];
  tituloDePlan: any;
  codigoHtmlPlantilla: any;

  planMuestra: Plan = {
    tituloDePlan: ' ',
    precioPlan: 0,
    caracteristicas: [],
  };

  //Columnas de Tablas
  columnasTablaPlan: string[] = ['Tipo de Plan', 'Precio', 'Accion'];
  columnasTablaCuentas: string[] = [
    'Nombre de la Empresa',
    'Nombre del Dueño',
    'Status',
    'Accion',
  ];
  columnasTablaClientes: string[] = ['Nombre del Cliente', 'Status', 'Accion'];

  constructor(
    private administradorSvc: AdministradorsService,
    private plantillaSvc: PlantillasService,
    private planesSvc: PlansService,
    private clienteSvs: ClientesService,
    private empresaSvs: EmpresasService,
    private router: Router,
    private authservice: AuthService, 
    private authToken: TokenService
  ) {}

  statusTrue(id: any) {
    console.log(id);
    this.clienteSvs.getClinte(id).subscribe({
      next: (res) => {
        const cliente = {
          nombre: res.nombre,
          Apellido: res.Apellido,
          correo: res.correo,
          pasword: res.pasword,
          fotoUrl: res.fotoUrl,
          status: 'Activo',
        };
        this.clienteSvs.updateCliente(id, cliente).subscribe({
          next: (res) => {
            console.log(res);
          },
        });
      },
    });
    this.clienteSvs
    .getClientes()
    .pipe(
      tap((clientes: Cliente[]) => {
        this.clientes = clientes;
      })
    )
    .subscribe();
  }
  statusFalse(id: any) {
    console.log(id);
    this.clienteSvs.getClinte(id).subscribe({
      next: (res) => {
        console.log(res);
        const cliente = {
          nombre: res.nombre,
          Apellido: res.Apellido,
          correo: res.correo,
          pasword: res.pasword,
          fotoUrl: res.fotoUrl,
          status: 'Inactivo',
        };
        for (let i = 0; i < this.clientes.length; i++) {
          if (this.clientes[i].correo===res.correo) {
            this.clientes.splice(i, 1, cliente)
          }  
        }
        this.clienteSvs.updateCliente(id, cliente).subscribe({
          next: (res) => {
            console.log(res);
          },
        });
      },
    });
    this.clienteSvs
    .getClientes()
    .pipe(
      tap((clientes: Cliente[]) => {
        this.clientes = clientes;
      })
    )
    .subscribe();
  }
  deletePlan(id: string){
    this.planesSvc.deletePlan(id).subscribe({next: (res)=>{console.log(res)}})
    this.planesSvc
      .getPlanes()
      .pipe(
        tap((planes: Plan[]) => {
          this.planes = planes;
        })
      )
      .subscribe();
  }

  agregarCaracteristica(){
    const nuevaCaracteristica = (document.getElementById('cara') as HTMLInputElement).value;
    this.planMuestra.caracteristicas.push(nuevaCaracteristica);
    (document.getElementById('cara') as HTMLInputElement).value = ''
  }

  limpiarMuestra(){
  this.planMuestra = {
    tituloDePlan: '',
    precioPlan: 0,
    caracteristicas: [],
  };
  }

  verPlantilla(id: string) {
    console.log(id);
    this.getPlantilla(id);
    this.form1 = id;
    this.router.navigate(['/admin/code-box/' + this.form1]);
  }

  newCliente(newcliente: Cliente) {
    this.clienteSvs.newCliente(newcliente).subscribe((cliente) => {
      this.clientes.push(cliente);
      console.log(cliente);
    });
  }

  getPlantilla(id: string) {
    const nuevaPlantilla = this.plantillaSvc.getPlantilla(id).subscribe({
      next: (res) => {
        this.codigoHtmlPlantilla = res.codigohtml;
        console.log(
          `codigo plantilla ${res.tituloDePlantilla}`,
          this.codigoHtmlPlantilla
        );
      },
    });
  }

  newPlantilla(newPlantilla: Plantilla) {
    this.plantillaSvc.newPlantilla(newPlantilla).subscribe((Plantilla) => {
      this.plantillas.push(Plantilla);
      console.log(Plantilla);
    });
  }

  newPlan(newPlan: Plan) {
    this.planesSvc.newPlan(newPlan).subscribe((Plan) => {
      this.planes.push(Plan);
      console.log(Plan);
    });
    this.planesSvc
      .getPlanes()
      .pipe(
        tap((planes: Plan[]) => {
          this.planes = planes;
        })
      )
      .subscribe();
    
  }

  ngOnInit(): void {

    this.token={"token":this.authToken.getToken()}

    this.authToken.decodedToken(this.token).subscribe({
      next: res=>{
        this.info=res;
      },
      error: error=>{
        console.log(error);
      }
    });

    this.administradorSvc
      .getAdmin()
      .pipe(
        tap((administradores: Administrador[]) => {
          this.administradores = administradores;
        })
      )
      .subscribe();

    this.plantillaSvc
      .getPlantillas()
      .pipe(
        tap((plantillas: Plantilla[]) => {
          this.plantillas = plantillas;
        })
      )
      .subscribe();

    this.planesSvc
      .getPlanes()
      .pipe(
        tap((planes: Plan[]) => {
          this.planes = planes;
        })
      )
      .subscribe();

    this.clienteSvs
      .getClientes()
      .pipe(
        tap((clientes: Cliente[]) => {
          this.clientes = clientes;
        })
      )
      .subscribe();

    this.empresaSvs
      .getEmpresas()
      .pipe(
        tap((empresas: Empresa[]) => {
          this.empresas = empresas;
        })
      )
      .subscribe();


  }
}
