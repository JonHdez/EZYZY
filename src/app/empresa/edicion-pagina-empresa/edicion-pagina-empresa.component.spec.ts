import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionPaginaEmpresaComponent } from './edicion-pagina-empresa.component';

describe('EdicionPaginaEmpresaComponent', () => {
  let component: EdicionPaginaEmpresaComponent;
  let fixture: ComponentFixture<EdicionPaginaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionPaginaEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionPaginaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
