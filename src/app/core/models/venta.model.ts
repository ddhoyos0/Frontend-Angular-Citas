import { Cita } from './cita.model';

export interface Venta {
    id: number;
    fecha: Date;
    cita: Cita;
    utilidad: number;
    comision: number;
    total: number;
    estado: boolean;
}
