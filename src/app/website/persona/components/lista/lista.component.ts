import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from './../../../../core/servicio/persona/persona.service';
import { Persona } from 'src/app/core/models/persona.model';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar/editar.component';
import { EliminarComponent } from '../eliminar/eliminar/eliminar.component';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  persona: Persona[] = null;
  displayedColumns: string[] = [ 'identificacion', 'documento', 'nombre', 'celular', 'direccion', 'email', 'actions'];

  constructor(
    private servicio: PersonaService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.servicio.listar().subscribe(data => {
      this.persona = data;
    });
  }
  actualizar(row) {
    this.dialog.open(EditarComponent, {
      data: {
        id: row.id,
        identificacion: row.identificacion,
        documento: row.documento,
        nombre: row.nombre,
        celular: row.celular,
        direccion: row.direccion,
        email: row.email
      }
    });
  }

  eliminar(row) {
    this.dialog.open(EliminarComponent, {
      data: {
        id: row.id,
        identificacion: row.identificacion,
        documento: row.documento,
        nombre: row.nombre,
        celular: row.celular,
        direccion: row.direccion,
        email: row.email
      }
    });
  }
}
