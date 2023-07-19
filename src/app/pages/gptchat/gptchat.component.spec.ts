import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptchatComponent } from './gptchat.component';

describe('GptchatComponent', () => {
  let component: GptchatComponent;
  let fixture: ComponentFixture<GptchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GptchatComponent]
    });
    fixture = TestBed.createComponent(GptchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
