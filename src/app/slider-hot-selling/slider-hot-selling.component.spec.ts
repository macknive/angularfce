import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHotSellingComponent } from './slider-hot-selling.component';

describe('SliderHotSellingComponent', () => {
  let component: SliderHotSellingComponent;
  let fixture: ComponentFixture<SliderHotSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHotSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHotSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
