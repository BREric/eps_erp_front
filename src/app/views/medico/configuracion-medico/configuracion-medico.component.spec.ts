import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionMedicoComponent } from './configuracion-medico.component';

describe('ConfiguracionMedicoComponent', () => {
  let component: ConfiguracionMedicoComponent;
  let fixture: ComponentFixture<ConfiguracionMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionMedicoComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
