export class Paciente {

    constructor(nombre: string, edad: number, rut: string, enfermedad_previa: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.enfermedad_previa = enfermedad_previa;
    }

    nombre: string = "";
    edad: number = 0;
    rut: string = "";
    enfermedad_previa: boolean = false;
}