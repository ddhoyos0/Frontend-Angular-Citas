import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PersonaService } from 'src/app/core/servicio/persona/persona.service';
import { Documento } from 'src/app/core/models/documento.model';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertasComponent } from 'src/app/shared/components/alertas/alertas/alertas.component';
import { MSG_CREATED } from 'src/app/shared/var.const';
import { Persona } from 'src/app/core/models/persona.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  tipoDocumento: Documento[];
  persona: Persona[];

  constructor(
    private servicio: PersonaService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.servicio.documento().subscribe(data => {
      this.tipoDocumento = data;
    });
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
      identificacion: [null, [Validators.required]],
      documento: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      celular: [null, [Validators.required]],
      direccion: [null],
      email: [null, [Validators.email]],
    });
  }
}
