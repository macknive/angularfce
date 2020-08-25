import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider-recommended',
  templateUrl: './slider-recommended.component.html',
  styleUrls: ['./slider-recommended.component.scss']
})
export class SliderRecommendedComponent implements OnInit {
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
