import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioRoutingModule } from './servicio-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EliminarComponent } from './components/eliminar/eliminar/eliminar.component';
import { EditarComponent } from './components/editar/editar/editar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ListaComponent, FormularioComponent, EliminarComponent, EditarComponent],
  imports: [
    CommonModule,
    ServicioRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ServicioModule { }
