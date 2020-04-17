import { Documento } from './documento.model';

export interface Persona {
    id: number;
    identificacion: Documento;
    documento: string;
    nombre: string;
    celular: string;
    direccion: string;
    email: string;
    estado: boolean;
}
