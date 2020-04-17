import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PersonaService } from 'src/app/core/servicio/persona/persona.service';
import { Documento } from 'src/app/core/models/documento.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  tipoDocumento: Documento[];

  constructor(
    private servicio: PersonaService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.servicio.documento().subscribe(data => {
      this.tipoDocumento = data;
    });
  }

  crear() {
    if (this.form.valid) {
      this.servicio.crear(this.form.value).subscribe(datos => {
        this.router.navigate(['persona/listar']);
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      identificacion: [null, [Validators.required]],
      documento: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      celular: [null, [Validators.required]],
      direccion: [null],
      email: [null, [Validators.email]],
      estado: [false]
    });
  }

}
