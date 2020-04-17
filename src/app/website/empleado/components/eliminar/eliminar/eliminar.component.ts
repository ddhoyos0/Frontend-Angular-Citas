import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadoService } from 'src/app/core/servicio/empleado/empleado.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: EmpleadoService
  ) { }

  ngOnInit(): void {
  }
  cerrar(): void {
    this.dialogRef.close();
  }

  confirmar(): void {
    this.dataService.eliminar(this.data.id).subscribe(datos => {
      this.cerrar();
      location.reload();
    });
  }
}
