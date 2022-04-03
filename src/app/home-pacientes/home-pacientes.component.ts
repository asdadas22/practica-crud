import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-home-pacientes',
  templateUrl: './home-pacientes.component.html',
  styleUrls: ['./home-pacientes.component.css']
})
export class HomePacientesComponent implements OnInit {

  constructor (private fb: FormBuilder, private pacienteService: PacientesService) {
  }

  title = "Formulario paciente";

  formularioPaciente = this.fb.group({
    nombre: ['', Validators.required],
    edad: [0, Validators.required],
    rut: ['', Validators.required],
    enfermedad_previa: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  agregarPacienteNuevo(){
    let nuevoPaciente = this.formularioPaciente.value;
    this.pacienteService.agregarNuevoPaciente(nuevoPaciente);
  }



}
