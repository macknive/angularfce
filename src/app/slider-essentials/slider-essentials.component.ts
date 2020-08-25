import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider-essentials',
  templateUrl: './slider-essentials.component.html',
  styleUrls: ['./slider-essentials.component.scss']
})
export class SliderEssentialsComponent implements OnInit {
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
