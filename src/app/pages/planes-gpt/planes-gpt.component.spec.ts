import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesGptComponent } from './planes-gpt.component';

describe('PlanesGptComponent', () => {
  let component: PlanesGptComponent;
  let fixture: ComponentFixture<PlanesGptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanesGptComponent]
    });
    fixture = TestBed.createComponent(PlanesGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
