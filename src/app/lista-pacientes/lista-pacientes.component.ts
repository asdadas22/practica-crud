import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../models/pacientes.models';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  @Input()
  listaDePacientes!: Paciente;

  @Input()
  indice!: number;

  listaPaciente: Paciente[] = [];

  constructor (private pacienteServices: PacientesService) {
    this.listaPaciente = pacienteServices.pacientes;
  }

  ngOnInit(): void {
    for (let i: number = 0; i < this.listaPaciente.length; i++) {
      console.log(this.listaPaciente[i]);
    }
  }

}
