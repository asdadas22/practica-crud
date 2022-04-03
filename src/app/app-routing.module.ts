import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPacientesComponent } from './editar-pacientes/editar-pacientes.component';
import { HomePacientesComponent } from './home-pacientes/home-pacientes.component';

const routes: Routes = [
  {path: "", component:HomePacientesComponent},
  {path: "editar/:rut", component:EditarPacientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
