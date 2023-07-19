import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsInteligentesComponent } from './bots-inteligentes.component';

describe('BotsInteligentesComponent', () => {
  let component: BotsInteligentesComponent;
  let fixture: ComponentFixture<BotsInteligentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotsInteligentesComponent]
    });
    fixture = TestBed.createComponent(BotsInteligentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
