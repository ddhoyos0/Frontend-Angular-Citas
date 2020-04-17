import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/core/models/servicio.model';
import { ServiciosService } from 'src/app/core/servicio/servicios/servicios.service';
import { MatDialog } from '@angular/material/dialog';
import { EliminarComponent } from '../eliminar/eliminar/eliminar.component';
import { EditarComponent } from '../editar/editar/editar.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  servicios: Servicio[];
  displayedColumns: string[] = ['tipo', 'precio', 'actions'];

  constructor(
    public servicio: ServiciosService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.servicio.listar().subscribe(data => {
      this.servicios = data;
    });
  }

  actualizar(row) {
    this.dialog.open(EditarComponent, {
      data: {
        id: row.id,
        tipo: row.tipo,
        precio: row.precio
      }
    });
  }

  eliminar(row) {
    this.dialog.open(EliminarComponent, {
      data: {
        id: row.id,
        tipo: row.tipo,
        precio: row.precio
      }
    });
  }

}
