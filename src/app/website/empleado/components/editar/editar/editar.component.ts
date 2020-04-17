import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadoService } from 'src/app/core/servicio/empleado/empleado.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PersonaService } from 'src/app/core/servicio/persona/persona.service';
import { Persona } from 'src/app/core/models/persona.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  persona: Persona[];

  constructor(
    private servicioPersona: PersonaService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.servicioPersona.listar().subscribe(data => {
      this.persona = data;
    });
  }

  cerrar(): void {
    this.dialogRef.close();
  }

  editar(): void {
    if (this.form.valid) {
      this.dataService.editar(this.form.value).subscribe(datos => {
        this.cerrar();
        location.reload();
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      porcentaje: [0, [Validators.required]],
      persona: [null, [Validators.required]]
    });
  }
}
