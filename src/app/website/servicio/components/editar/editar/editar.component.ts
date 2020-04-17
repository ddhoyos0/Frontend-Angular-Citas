import { Component, OnInit, Inject } from '@angular/core';
import { ServiciosService } from 'src/app/core/servicio/servicios/servicios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  form: FormGroup;

  constructor(
    private servicio: ServiciosService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  cerrar(): void {
    this.dialogRef.close();
  }

  editar(): void {
    if (this.form.valid) {
      this.servicio.editar(this.form.value).subscribe(datos => {
        this.cerrar();
        location.reload();
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      id: [null],
      tipo: [null, [Validators.required]],
      precio: [0, [Validators.required]],
    });
  }

}
