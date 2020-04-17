import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { EditarComponent } from './components/editar/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar/eliminar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormularioComponent, ListaComponent, EditarComponent, EliminarComponent],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class EmpleadoModule { }
