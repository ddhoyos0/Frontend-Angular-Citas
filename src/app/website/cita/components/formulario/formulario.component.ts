import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Servicio } from 'src/app/core/models/servicio.model';
import { Persona } from 'src/app/core/models/persona.model';
import { Empleado } from 'src/app/core/models/empleado.model';
import { CitaService } from 'src/app/core/servicio/cita/cita.service';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/core/servicio/empleado/empleado.service';
import { PersonaService } from 'src/app/core/servicio/persona/persona.service';
import { ServiciosService } from 'src/app/core/servicio/servicios/servicios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  servicios: Servicio[];
  persona: Persona[];
  empleado: Empleado[];

  constructor(
    private servicio: CitaService,
    private servicioEmpleado: EmpleadoService,
    private servicioPersona: PersonaService,
    private servicioServicio: ServiciosService,
    private router: Router,
    private fb: FormBuilder
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
  crear() {
    if (this.form.valid) {
      this.servicio.crear(this.form.value).subscribe(datos => {
        this.router.navigate(['cita/listar']);
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      fecha: [null, [Validators.required]],
      persona: [null, [Validators.required]],
      empleado: [null, [Validators.required]],
      servicio: [null, [Validators.required]],
      estado: [false]
    });
  }

}
