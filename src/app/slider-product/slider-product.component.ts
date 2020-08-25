import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss']
})
export class SliderProductComponent implements OnInit {

  slides = [
    {img: "../../assets/images/1.jpg"},
    {img: "../../assets/images/2.jpg"},
    {img: "../../assets/images/3.jpg"},
    {img: "../../assets/images/4.jpg"},
    {img: "../../assets/images/5.jpg"},
    {img: "../../assets/images/6.jpg"},

  ];
  
  slideConfig = {
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    arrows: false,
    loop: true,
    asNavFor: '.slider-for',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 576,
        settings: {
          vertical: false,
          verticalSwiping: false,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  };

  slideConfigSingle = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    arrows: false
  };

  slideConfigPrice = {
    slidesToShow: 3,
    arrows: false,
    loop: false,
    infinite: false
  };
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
