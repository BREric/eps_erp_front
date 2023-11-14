import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlogoAdminComponent } from './navlogo-admin.component';

describe('NavlogoAdminComponent', () => {
  let component: NavlogoAdminComponent;
  let fixture: ComponentFixture<NavlogoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavlogoAdminComponent]
    });
    fixture = TestBed.createComponent(NavlogoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
