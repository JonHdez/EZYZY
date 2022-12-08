import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Administrador } from 'src/app/interfaces/administrador.interface';
import { AdministradorsService } from '../../services/administrador.service';
import { PlantillasService } from '../../services/plantilla.service';
import { Plantilla } from '../../interfaces/plantilla.interface';
import { Plan} from 'src/app/interfaces/plan.interface';
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

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent implements OnInit {

  private form1="";

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
  tituloDePlan:any
  codigoHtmlPlantilla:any;
  
  planMuestra: Plan = {
    tituloDePlan: '' ,
    precioPlan: 0,
    caracteristicas: []
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
    private router: Router
  ) {}
  
  verPlantilla(id:string) {
    console.log(id)
    this.getPlantilla(id)
    this.form1= id;
    this.router.navigate(["/admin/code-box/"+this.form1], )
  }

  newCliente(newcliente: Cliente) {
    this.clienteSvs.newCliente(newcliente).subscribe((cliente) => {
      this.clientes.push(cliente);
      console.log(cliente);
    });
  }

  getPlantilla(id: string){
    const nuevaPlantilla = this.plantillaSvc.getPlantilla(id).subscribe({
      next:(res)=>{
        this.codigoHtmlPlantilla = res.codigohtml;
        console.log(`codigo plantilla ${res.tituloDePlantilla}`,this.codigoHtmlPlantilla);
      }
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
  }

  ngOnInit(): void {
    this.administradorSvc
      .getAdmin()
      .pipe(
        tap((administradores: Administrador[]) => {
          this.administradores = administradores;
          console.log(this.administradores);
        })
      )
      .subscribe();

    this.plantillaSvc
      .getPlantillas()
      .pipe(
        tap((plantillas: Plantilla[]) => {
          this.plantillas = plantillas;
          console.log(this.plantillas);
        })
      )
      .subscribe();

    this.planesSvc
      .getPlanes()
      .pipe(
        tap((planes: Plan[]) => {
          this.planes = planes;
          console.log(this.planes);
        })
      )
      .subscribe();

    this.clienteSvs
      .getClientes()
      .pipe(
        tap((clientes: Cliente[]) => {
          this.clientes = clientes;
          console.log(this.clientes);
        })
      )
      .subscribe();

    this.empresaSvs
      .getEmpresas()
      .pipe(
        tap((empresas: Empresa[]) => {
          this.empresas = empresas;
          console.log(this.empresas);
        })
      )
      .subscribe();
  }
}
