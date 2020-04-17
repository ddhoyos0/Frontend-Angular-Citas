import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VentaRoutingModule } from './venta-routing.module';
import { FormularioComponent } from './components/formulario/formulario/formulario.component';
import { ListarComponent } from './components/listar/listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FormularioComponent, ListarComponent],
  imports: [
    CommonModule,
    VentaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class VentaModule { }
