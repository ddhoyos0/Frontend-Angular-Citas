import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  dataServicio: any;
  constructor(
    private http: HttpClient
  ) { }

  Url = 'http://localhost:8080/servicio/';

  listar() {
    return this.http.get<Servicio[]>(this.Url + 'listar');
  }

  crear(servicio: Servicio) {
    return this.http.post<Servicio>(this.Url + 'crear', servicio);
  }

  editar(servicio: Servicio) {
    return this.http.put<Servicio[]>(this.Url + 'actualizar', servicio);
  }

  actualizar(servicio: Servicio): void {
    this.dataServicio = servicio;
  }

  eliminar(id: number) {
    return this.http.delete<Servicio>(this.Url + 'eliminar/' + id);
  }


}
