import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadMedicoComponent } from './disponibilidad-medico.component';

describe('DisponibilidadMedicoComponent', () => {
  let component: DisponibilidadMedicoComponent;
  let fixture: ComponentFixture<DisponibilidadMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisponibilidadMedicoComponent]
    });
    fixture = TestBed.createComponent(DisponibilidadMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
