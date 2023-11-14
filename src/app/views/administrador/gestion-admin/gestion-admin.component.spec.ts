import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminComponent } from './gestion-admin.component';

describe('GestionAdminComponent', () => {
  let component: GestionAdminComponent;
  let fixture: ComponentFixture<GestionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionAdminComponent]
    });
    fixture = TestBed.createComponent(GestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
