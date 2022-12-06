export interface Empresa {
    nombre:string; 
    Apellido:string; 
    correo:string; 
    pasword:string;
    productos: [
        {
            id: number;
            nombreProducto: string
            cantidad:number
            precio:number
            descripcion:string
        }
    ]

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