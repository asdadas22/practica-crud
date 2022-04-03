import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../models/pacientes.models';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.css']
})
export class EditarPacientesComponent implements OnInit {

  constructor(private pacienteServices: PacientesService,
    private route: ActivatedRoute,
    private router: Router) {
      this.rut_obtenido = route.snapshot.params['rut'];
      
      let pacienteEncontrado = this.pacienteServices.buscarEmpleado(this.rut_obtenido);
      if(pacienteEncontrado) {
        this.nombre = pacienteEncontrado.nombre;
        this.edad = pacienteEncontrado.edad;
        this.rut = pacienteEncontrado.rut;
        this.enfermedad_previa = pacienteEncontrado.enfermedad_previa;
      }
  }

  title: string = "Editar paciente";

  accion: number = 0;

  rut_obtenido: string = '';

  nombre: string = '';
  edad: number = 0;
  rut: string = '';
  enfermedad_previa: boolean = false;

  ngOnInit(): void {
    this.accion = Number(this.route.snapshot.queryParams['accion']);
  }

  actualizarPaciente() {
    let actualizar_paciente_ref = new Paciente(this.nombre, this.edad, this.rut, this.enfermedad_previa);
    this.pacienteServices.actualizarPaciente(this.rut_obtenido, actualizar_paciente_ref);
    this.volverAlHome();
  }

  eliminarPaciente() {
    this.pacienteServices.eliminarPaciente(this.rut_obtenido);
    this.volverAlHome();
  }

  realizarAccion(){
    this.accion == 1 ? this.actualizarPaciente() : this.eliminarPaciente();
  }

  volverAlHome(){
    this.router.navigate(['']);
  }

}
