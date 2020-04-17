import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/core/models/venta.model';
import { VentaService } from 'src/app/core/servicio/venta/venta.service';
import { MatDialog } from '@angular/material/dialog';
import { EliminarComponent } from 'src/app/website/cita/components/eliminar/eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  venta: Venta[] = null;
  displayedColumns: string[] = ['fecha', 'cita', 'cliente', 'empleado', 'utilidad', 'comision', 'total', 'actions'];

  constructor(
    private servicio: VentaService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.servicio.listar().subscribe(data => {
      this.venta = data;
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
