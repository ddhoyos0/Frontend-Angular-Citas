import { Injectable } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  dataServicio: any;

  Url = 'http://localhost:8080/empleado/';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Empleado[]>(this.Url + 'listar');
  }

  crear(empleado: Empleado) {
    return this.http.post<Empleado>(this.Url + 'crear', empleado);
  }

  editar(empleado: Empleado) {
    return this.http.put<Empleado[]>(this.Url + 'actualizar', empleado);
  }

  actualizar(empleado: Empleado): void {
    this.dataServicio = empleado;
  }

  eliminar(id: number) {
    return this.http.delete<Empleado>(this.Url + 'eliminar/' + id);
  }
}
