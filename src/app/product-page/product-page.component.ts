import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 6,
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
