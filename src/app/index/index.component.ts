import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { IndexService } from './index.service';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  slideIndex = 1;

  constructor(private indexService: IndexService) { }

  ngOnInit(): void {
    this.indexService.allFolder().subscribe(req => {
      console.log(req);
    });
  }

  configMain: SwiperConfigInterface = {
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
  configFiles: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 2.5,
  pagination: false,
  //centeredSlides: true,
  loop: true,
  spaceBetween: 20,
//  roundLengths: true,
  nested: true,
  };

  slideTo(index): void{
    this.slideIndex= index;
  }

}
