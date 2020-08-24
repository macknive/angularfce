import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderVendorItemsComponent } from './slider-vendor-items.component';

describe('SliderVendorItemsComponent', () => {
  let component: SliderVendorItemsComponent;
  let fixture: ComponentFixture<SliderVendorItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderVendorItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderVendorItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
