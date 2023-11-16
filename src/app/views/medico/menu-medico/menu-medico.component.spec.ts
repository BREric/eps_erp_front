import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMedicoComponent } from './menu-medico.component';

describe('MenuMedicoComponent', () => {
  let component: MenuMedicoComponent;
  let fixture: ComponentFixture<MenuMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMedicoComponent]
    });
    fixture = TestBed.createComponent(MenuMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
