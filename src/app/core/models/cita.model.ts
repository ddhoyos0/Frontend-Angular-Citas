import { DatePipe } from '@angular/common';
import { Persona } from './persona.model';
import { Empleado } from './empleado.model';
import { Servicio } from './servicio.model';

export class Cita {
    id: number;
    fecha: DatePipe;
    persona: Persona;
    empleado: Empleado;
    servicio: Servicio;
    estado: boolean;

    constructor(id: number, fecha: DatePipe,  persona: Persona, empleado: Empleado, servicio: Servicio, estado: boolean) {
        this.id = id;
        this.fecha = fecha;
        this.persona = persona;
        this.empleado = empleado;
        this.servicio = servicio;
        this.estado = estado;
    }
}
