import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEssentialsComponent } from './slider-essentials.component';

describe('SliderEssentialsComponent', () => {
  let component: SliderEssentialsComponent;
  let fixture: ComponentFixture<SliderEssentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderEssentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
