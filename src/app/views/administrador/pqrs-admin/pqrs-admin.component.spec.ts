import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsAdminComponent } from './pqrs-admin.component';

describe('PqrsAdminComponent', () => {
  let component: PqrsAdminComponent;
  let fixture: ComponentFixture<PqrsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PqrsAdminComponent]
    });
    fixture = TestBed.createComponent(PqrsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
