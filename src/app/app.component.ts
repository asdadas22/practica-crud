import { Component } from '@angular/core';
import { Paciente } from './models/pacientes.models';
import { PacientesService } from './pacientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Lista de pacientes';

  constructor () {
  }
}
