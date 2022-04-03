import { Injectable } from '@angular/core';
import { Paciente } from './models/pacientes.models';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PacientesService {

  constructor() { }

  pacientes: Paciente[] = [
    new Paciente("Rubén", 0, "12345667", true),
    new Paciente("Pepe", 0, "5555555", false),
    new Paciente("Lopéz", 0, "3333222", true),
    new Paciente("Perez", 0, "67676767", true)
  ]

  agregarNuevoPaciente(nuevoPaciente: Paciente) {
    console.log(nuevoPaciente);
    this.pacientes.push(nuevoPaciente);
  }

  actualizarPaciente(rut_obtenido: string, paciente_obtenido: Paciente) {
    let paciente_obtenido_ref = this.pacientes.find(paciente => paciente.rut == rut_obtenido) as Paciente | undefined;
    if (paciente_obtenido_ref) {
      paciente_obtenido_ref.nombre = paciente_obtenido.nombre;
      paciente_obtenido_ref.edad = paciente_obtenido.edad;
      paciente_obtenido_ref.rut = paciente_obtenido.rut;
      paciente_obtenido_ref.enfermedad_previa = paciente_obtenido.enfermedad_previa;
    }
  }

  eliminarPaciente(rut_obtenido: string) {
    for (let i = 0; i < this.pacientes.length; i++) {
      if (this.pacientes[i].rut == rut_obtenido) {
        this.pacientes.splice(i, 1);
      }
    }
  }

  buscarEmpleado(rut: string): Paciente | undefined{
    const result = this.pacientes.find(paciente => paciente.rut === rut) as Paciente | undefined
    return result;
  }
}
