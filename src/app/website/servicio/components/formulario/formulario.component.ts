import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/core/servicio/servicios/servicios.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;

  constructor(
    private servicio: ServiciosService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  crear() {
    if (this.form.valid) {
      this.servicio.crear(this.form.value).subscribe(datos => {
        this.router.navigate(['servicio/listar']);
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      tipo: [null, [Validators.required]],
      precio: [0, [Validators.required]],
    });
  }
}
