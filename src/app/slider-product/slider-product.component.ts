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
    slidesToShow: 4,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    asNavFor: '.slider-for',
    focusOnSelect: true
  };

  slideConfigSingle = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav',
    draggable:true
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
