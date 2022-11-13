import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasPlanComponent } from './tarjetas-plan.component';

describe('TarjetasPlanComponent', () => {
  let component: TarjetasPlanComponent;
  let fixture: ComponentFixture<TarjetasPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
