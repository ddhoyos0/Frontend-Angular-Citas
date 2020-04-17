import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,  MatDialogModule],
      declarations: [ListaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Metodo listar servicios desde el componente', () => {
    it('listar servicios', async(() => {
      expect(component.listar).toThrowError();
    }));

  });

});
