import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { LoginService } from '../login/login/login.service';
import { StoredDocumentsService } from '../profile/stored-documents/stored-documents.service';
import { IndexService } from './index.service';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  slideIndex = 1;

  directories: {id?: string; uid?: string; name?: string; color?: string;}[];
  userData: {user: { firstname?: string; surname?: string}; fileCount?: string} = 
    {user: {firstname: '', surname: ''}, fileCount: ''};
  cats: {id?: string; uid?: string; name?: string; folder?: string; last_opened?: string; color?: string}[];

  selectedMenu?: {folderId?: string, name?: string; color: string;} =
  {folderId: '', name: '', color: ''};
  categories:{
    id?: string; uid?: string; name?: string; folder?: string; last_opened?: string;}[] = []

  errorMsg = '';
  
  constructor(private indexService: IndexService, private storedService: StoredDocumentsService) { }

  ngOnInit(): void {
    this.indexService.allFolder().subscribe(req => {
      console.log(req);
      if(req.code === 202){
        this.directories = req.data;
      }else {
        this.errorMsg = "Keine Ordner gefunden";
        
      }
    });
    this.indexService.getUserData().subscribe(req => {
      console.log(req.data);
      if(req.code === 202){
        this.userData = req.data;
      }else {
        this.errorMsg = "Fehler bei laden der Nutzerdaten";
        
      }
    });

    this.indexService.getLastOpenCats().subscribe(req => {
      console.log(req);
      if(req.code === 202){
        this.cats = req.data;
      }else {
        this.errorMsg = "Fehler bei laden";
        
      }
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


  setMenu(item): void{
    this.selectedMenu.folderId = item.id;
    this.selectedMenu.name = item.name;
    this.selectedMenu.color = item.color;

    this.storedService.view(item.id).subscribe(req => {
      if(req.code === 202){
        console.log(req.data);
        this.categories = req.data;
      }else {
        this.categories = [];
      }
  });
  }

}
