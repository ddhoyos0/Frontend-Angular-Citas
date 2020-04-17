import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/core/models/empleado.model';
import { EmpleadoService } from 'src/app/core/servicio/empleado/empleado.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar/editar.component';
import { EliminarComponent } from '../eliminar/eliminar/eliminar.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  empleado: Empleado[] = null;
  displayedColumns: string[] = ['persona', 'porcentaje', 'actions'];

  constructor(
    private servicio: EmpleadoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.servicio.listar().subscribe(data => {
      this.empleado = data;
    });
  }

  actualizar(row) {
    this.dialog.open(EditarComponent, {
      data: {
        id: row.id,
        porcentaje: row.porcentaje,
        persona: row.persona
      }
    });
  }

  eliminar(row) {
    this.dialog.open(EliminarComponent, {
      data: {
        id: row.id,
        porcentaje: row.porcentaje,
        persona: row.persona
      }
    });
  }
}
