import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/core/servicio/empleado/empleado.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/core/servicio/persona/persona.service';
import { Persona } from 'src/app/core/models/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  persona: Persona[];

  constructor(
    private servicio: EmpleadoService,
    private servicioPersona: PersonaService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.servicioPersona.listar().subscribe(data => {
      this.persona = data;
    });
  }

  crear() {
    if (this.form.valid) {
      this.servicio.crear(this.form.value).subscribe(datos => {
        this.router.navigate(['empleado/listar']);
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      porcentaje: [Validators.required],
      persona: [Validators.required],
      estado: [false]
    });
  }

}
