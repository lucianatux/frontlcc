export class Proyectos {
    id?: number;
    nombre: string;
    descripcion: string;
    enlace: string;

    constructor(nombre: string, descripcion: string, enlace: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }
}
