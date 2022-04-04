import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
    nombre: new FormControl('',[Validators.required, Validators.minLength(4)]),
    edad: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    rut: new FormControl('', [Validators.required]),
    enfermedad_previa: new FormControl ('', [Validators.required])
  });

  ngOnInit(): void {
  }

  agregarPacienteNuevo(){
    let nuevoPaciente = this.formularioPaciente.value;
    this.pacienteService.agregarNuevoPaciente(nuevoPaciente);
  }

  get nombre() {
    return this.formularioPaciente.get('nombre');
  }

  get edad() {
    return this.formularioPaciente.get('edad');
  }

  get rut() {
    return this.formularioPaciente.get('rut');
  }

  get enfermedadPrevia() {
    return this.formularioPaciente.get('enfermedad_previa');
  }
}
