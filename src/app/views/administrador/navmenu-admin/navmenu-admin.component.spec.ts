import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmenuAdminComponent } from './navmenu-admin.component';

describe('NavmenuAdminComponent', () => {
  let component: NavmenuAdminComponent;
  let fixture: ComponentFixture<NavmenuAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavmenuAdminComponent]
    });
    fixture = TestBed.createComponent(NavmenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
