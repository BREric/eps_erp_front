import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasMedicoComponent } from './citas-medico.component';

describe('CitasMedicoComponent', () => {
  let component: CitasMedicoComponent;
  let fixture: ComponentFixture<CitasMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasMedicoComponent]
    });
    fixture = TestBed.createComponent(CitasMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
