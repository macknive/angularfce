import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider-hot-selling',
  templateUrl: './slider-hot-selling.component.html',
  styleUrls: ['./slider-hot-selling.component.scss']
})
export class SliderHotSellingComponent implements OnInit {
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
