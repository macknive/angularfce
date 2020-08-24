import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRecommendedComponent } from './slider-recommended.component';

describe('SliderRecommendedComponent', () => {
  let component: SliderRecommendedComponent;
  let fixture: ComponentFixture<SliderRecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderRecommendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
