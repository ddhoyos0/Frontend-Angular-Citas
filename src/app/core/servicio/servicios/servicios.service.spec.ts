import { TestBed } from '@angular/core/testing';
import { ServiciosService } from './servicios.service';
import { HttpClientModule } from '@angular/common/http';

describe('ServiciosService', () => {
  let service: ServiciosService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ServiciosService);
  });

  it('testing servicio listar servicios de peluqueria', () => {
    service.listar().subscribe(datos => {
      expect(datos.length).toEqual(3);
    });
  });
});
