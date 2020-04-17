import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './components/editar/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar/eliminar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListaComponent, FormularioComponent, EditarComponent, EliminarComponent],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PersonaModule { }
