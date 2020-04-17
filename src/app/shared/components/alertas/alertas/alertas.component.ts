import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent implements OnInit {
  mensaje: string;
  constructor(
    public dialogRef: MatDialogRef<AlertasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.mensaje = data;
   }

  ngOnInit(): void {
  }

  cerrar(): void {
    this.dialogRef.close();
  }

}
