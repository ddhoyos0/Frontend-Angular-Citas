import { Persona } from './persona.model';

export interface Empleado {
    id: number;
    porcentaje: number;
    persona: Persona;
    estado: boolean;
}
