import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../../models/cita.model';
import { map, catchError  } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  citaEditar: any;

  constructor(
    private http: HttpClient
  ) { }

  Url = 'http://localhost:8080/cita/';

  listar() {
    return this.http.get<Cita[]>(this.Url + 'listar');
  }

  crear(cita: Cita) {
    return this.http.post<Cita>(this.Url + 'crear', cita).pipe(
      map((data: any) => {
        return data;
  }), catchError( error => {
      console.log(error);
      return throwError(error.message);
    }));
  }

  editar(cita: Cita) {
    return this.http.put<Cita>(this.Url + 'actualizar', cita);
  }

  actulizar(cita: Cita) {
    this.citaEditar = cita;
  }

  eliminar(cita: Cita) {
    return this.http.delete<Cita>(this.Url + 'eliminar');
  }

  listarEstado(estado: boolean) {
    return this.http.get<Cita[]>(this.Url + 'listar/' + estado);
  }
}
