import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {

  constructor(
    public modal: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.modal.closeAll();
  }

  Eliminar() {

  }
}
