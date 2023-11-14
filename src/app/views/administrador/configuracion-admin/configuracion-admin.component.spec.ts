import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAdminComponent } from './configuracion-admin.component';



describe('ConfiguracionAdminComponent', () => {
  let component: ConfiguracionAdminComponent;
  let fixture: ComponentFixture<ConfiguracionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionAdminComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
