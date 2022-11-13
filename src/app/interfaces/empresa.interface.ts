export interface Empresa {
    id: number; 
    nombre:string; 
    Apellido:string; 
    correo:string; 
    pasword:string; 
    empresa: [ 
        { 
            NombreEmpresa:string;
            logoEmpresa:string; 
            descripcionEmpresa:string ; 
            correoEmpresa:string; 
            direccionEmpresa:string; 
            numeroTelefonicoEmpresa:number; 
            status: true; 
            plan: string;
            mision:string;
            vision:string;
        }
    ]
}