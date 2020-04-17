import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cita } from 'src/app/core/models/cita.model';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/core/servicio/cita/cita.service';
import { VentaService } from 'src/app/core/servicio/venta/venta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  citas: Cita[];
  citaActul: Cita;

  constructor(
    private servicioCita: CitaService,
    private servicio: VentaService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.servicioCita.listarEstado(false).subscribe(data => {
      this.citas = data;
    });
  }

  operaciones(cita: Cita) {
    const resultado = (cita.servicio.precio * cita.empleado.porcentaje) / 100;
    this.form.controls.utilidad.setValue(resultado);
    this.form.controls.comision.setValue(resultado);
    this.form.controls.total.setValue(cita.servicio.precio);
    this.citaActul = cita;
    this.citaActul.estado = true;
  }

  citaActualizar() {
    return this.citaActul.estado = true;
  }

  crear() {
    if (this.form.valid) {
      this.servicio.crear(this.form.value).subscribe(datos => {
        console.log(this.form.value);
        this.router.navigate(['venta/listar']);
      });

      this.servicioCita.editar(this.citaActul).subscribe(dato => {
        console.log(dato);
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      fecha: ['now()'],
      cita: [null, [Validators.required]],
      utilidad: {disabled: true},
      comision: { disabled: true},
      total: { disabled: true},
      estado: [false]
    });
  }

}
