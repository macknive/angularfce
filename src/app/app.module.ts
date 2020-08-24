import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SliderRecommendedComponent } from './slider-recommended/slider-recommended.component';
import { SliderNewArrivalComponent } from './slider-new-arrival/slider-new-arrival.component';
import { SliderEssentialsComponent } from './slider-essentials/slider-essentials.component';
import { SliderVendorItemsComponent } from './slider-vendor-items/slider-vendor-items.component';
import { SliderMoreChoicesComponent } from './slider-more-choices/slider-more-choices.component';
import { SliderHotSellingComponent } from './slider-hot-selling/slider-hot-selling.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    LandingPageComponent,
    SliderRecommendedComponent,
    SliderNewArrivalComponent,
    SliderEssentialsComponent,
    SliderVendorItemsComponent,
    SliderMoreChoicesComponent,
    SliderHotSellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
