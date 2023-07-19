import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocapComponent } from './mocap.component';

describe('MocapComponent', () => {
  let component: MocapComponent;
  let fixture: ComponentFixture<MocapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MocapComponent]
    });
    fixture = TestBed.createComponent(MocapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
