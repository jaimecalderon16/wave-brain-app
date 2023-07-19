import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComprasComponent } from './nav-bar-compras.component';

describe('NavBarComprasComponent', () => {
  let component: NavBarComprasComponent;
  let fixture: ComponentFixture<NavBarComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComprasComponent]
    });
    fixture = TestBed.createComponent(NavBarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
