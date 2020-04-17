import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../models/persona.model';
import { Documento } from '../../models/documento.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  dataServicio: any;

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/persona/';
  Url2 = 'http://localhost:8080/identificacion/';


  listar() {
    return this.http.get<Persona[]>(this.Url + 'listar');
  }

  crear(persona: Persona) {
    return this.http.post<Persona>(this.Url + 'crear', persona);
  }

  documento() {
    return this.http.get<Documento[]>(this.Url2 + 'listar');
  }

  editar(persona: Persona) {
    return this.http.put<Persona[]>(this.Url + 'actualizar', persona);
  }
  actualizar(persona: Persona): void {
    this.dataServicio = persona;
  }

  eliminar(id: number) {
    return this.http.delete<Persona[]>(this.Url + 'eliminar/' + id);
  }
}
