import { Component, OnInit, ViewChild } from '@angular/core';
import { Servicio } from 'src/app/core/models/servicio.model';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/core/servicio/cita/cita.service';
import { Cita } from 'src/app/core/models/cita.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';
import { EditarComponent } from '../editar/editar.component';
import { EliminarComponent } from '../eliminar/eliminar.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  cita: Cita[];
  displayedColumns: string[] = ['fecha', 'persona', 'empleado', 'servicio', 'actions'];

  constructor(
    private modal: MatDialog,
    private servicio: CitaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicio.listar().subscribe(data => {
      this.cita = data;
    });
  }

  crear() {
    const modalConfig = new MatDialogConfig();
    modalConfig.disableClose = true;
    modalConfig.autoFocus = true;
    modalConfig.width = '50%';
    this.modal.open(FormularioComponent, modalConfig);
  }

  actualizar(row) {
    const dialogRef = this.modal.open(EditarComponent, {
      data: {id: row.id, fecha: row.fecha, persona: row.persona, empleado: row.empleado, servicio: row.servicio}
    });

  }

  eliminar(row: Cita) {
  }

  cerrar(): void {
    this.modal.closeAll();
  }

}
