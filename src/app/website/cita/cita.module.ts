import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaRoutingModule } from './cita-routing.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormularioComponent, ListaComponent, EditarComponent, EliminarComponent],
  imports: [
    CommonModule,
    CitaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CitaModule { }
