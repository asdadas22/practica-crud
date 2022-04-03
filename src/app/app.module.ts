import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { PacientesService } from './pacientes.service';
import { HomePacientesComponent } from './home-pacientes/home-pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarPacientesComponent } from './editar-pacientes/editar-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    HomePacientesComponent,
    EditarPacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
