import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMoreChoicesComponent } from './slider-more-choices.component';

describe('SliderMoreChoicesComponent', () => {
  let component: SliderMoreChoicesComponent;
  let fixture: ComponentFixture<SliderMoreChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMoreChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMoreChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
