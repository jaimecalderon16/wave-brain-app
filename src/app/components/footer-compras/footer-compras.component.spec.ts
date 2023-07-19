import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComprasComponent } from './footer-compras.component';

describe('FooterComprasComponent', () => {
  let component: FooterComprasComponent;
  let fixture: ComponentFixture<FooterComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComprasComponent]
    });
    fixture = TestBed.createComponent(FooterComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
