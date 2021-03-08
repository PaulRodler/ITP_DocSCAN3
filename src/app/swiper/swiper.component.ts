import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  something = [0,1,2];
  slideIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onSwiper(swiper): void {
    console.log(swiper);
  }
  onSlideChange(): void {
    console.log('slide change');
  }
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    //slideToClickedSlide: true,
    //mousewheel: true,
    //scrollbar: false,
    //watchSlidesProgress: true,
    //navigation: true,
    //keyboard: true,
    pagination: false,
    //centeredSlides: true,
    //loop: true,
    roundLengths: true,
    //slidesOffsetBefore: 100,
    //slidesOffsetAfter: 100,
};  
slideTo(index): void{
  this.slideIndex = index;
}

}
