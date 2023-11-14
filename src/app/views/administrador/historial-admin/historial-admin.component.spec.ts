import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialAdminComponent } from './historial-admin.component';

describe('HistorialAdminComponent', () => {
  let component: HistorialAdminComponent;
  let fixture: ComponentFixture<HistorialAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialAdminComponent]
    });
    fixture = TestBed.createComponent(HistorialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
