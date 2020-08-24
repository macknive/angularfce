import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNewArrivalComponent } from './slider-new-arrival.component';

describe('SliderNewArrivalComponent', () => {
  let component: SliderNewArrivalComponent;
  let fixture: ComponentFixture<SliderNewArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderNewArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderNewArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
