import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CitaService } from 'src/app/core/servicio/cita/cita.service';
import { Empleado } from 'src/app/core/models/empleado.model';
import { Persona } from 'src/app/core/models/persona.model';
import { Servicio } from 'src/app/core/models/servicio.model';
import { EmpleadoService } from 'src/app/core/servicio/empleado/empleado.service';
import { PersonaService } from 'src/app/core/servicio/persona/persona.service';
import { ServiciosService } from 'src/app/core/servicio/servicios/servicios.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  servicios: Servicio[];
  persona: Persona[];
  empleado: Empleado[];

  constructor(
    public modal: MatDialog,
    private servicio: CitaService,
    private servicioEmpleado: EmpleadoService,
    private servicioPersona: PersonaService,
    private servicioServicio: ServiciosService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: CitaService
  ) { }

  ngOnInit(): void {
    this.cargarCobox();
    this.buildForm();
  }

  cargarCobox() {
    this.servicioEmpleado.listar().subscribe(data => {
      this.empleado = data;
    });

    this.servicioServicio.listar().subscribe(data => {
      this.servicios = data;
    });

    this.servicioPersona.listar().subscribe(data => {
      this.persona = data;
    });
  }

  actulizar() {
    this.servicio.actulizar(this.data);
  }

  editar() {
    if (this.form.valid) {
      this.servicio.crear(this.form.value).subscribe(datos => {
        this.router.navigate(['cita/listar']);
      });
    }
  }

  cerrar(): void {
    this.dialogRef.close();
  }

  private buildForm() {
    this.form = this.fb.group({
      fecha: [null, [Validators.required]],
      persona: [null, [Validators.required]],
      empleado: [null, [Validators.required]],
      servicio: [null, [Validators.required]],
    });
  }


}
