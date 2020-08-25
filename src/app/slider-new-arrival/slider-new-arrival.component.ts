import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider-new-arrival',
  templateUrl: './slider-new-arrival.component.html',
  styleUrls: ['./slider-new-arrival.component.scss']
})
export class SliderNewArrivalComponent implements OnInit {

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: true,
    pagination: false
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
