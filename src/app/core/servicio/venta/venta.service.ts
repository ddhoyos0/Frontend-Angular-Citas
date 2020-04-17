import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  dataServicio: any;

  constructor(
    private http: HttpClient
  ) { }

  Url = 'http://localhost:8080/venta/';

  listar() {
    return this.http.get<Venta[]>(this.Url + 'listar');
  }

  crear(venta: Venta) {
    return this.http.post<Venta>(this.Url + 'crear', venta);
  }

  editar(venta: Venta) {
    return this.http.put<Venta[]>(this.Url + 'actualizar', venta);
  }

  actualizar(venta: Venta): void {
    this.dataServicio = venta;
  }

  eliminar(id: number) {
    return this.http.delete<Venta>(this.Url + 'eliminar/' + id);
  }
}
