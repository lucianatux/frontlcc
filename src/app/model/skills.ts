export class Skills {
    id?: number;
    imagen: string;
    porcentaje: number;

    constructor(imagen: string, porcentaje: number){
        this.imagen = imagen;
        this.porcentaje = porcentaje;
    }
}
