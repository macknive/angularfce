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
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    arrows: false,
    loop: false,
    asNavFor: '.slider-for',
  };

  slideConfigSingle = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    arrows: true
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
