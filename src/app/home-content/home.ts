import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
register();

@Component({
  selector: 'app-home',
  imports: [CommonModule,FlexLayoutModule, MatGridListModule, MatCardModule, MatIconModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  constructor(private router: Router){

  }
   @ViewChild('swiperRef') swiperRef!: ElementRef;
slides = [
    { title: 'Slide 1', image: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { title: 'Slide 2', image: 'https://swiperjs.com/demos/images/nature-2.jpg' },
    { title: 'Slide 3', image: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { title: 'Slide 4', image: 'https://swiperjs.com/demos/images/nature-4.jpg' },
    { title: 'Slide 5', image: 'https://swiperjs.com/demos/images/nature-5.jpg' },
    { title: 'Slide 6', image: 'https://swiperjs.com/demos/images/nature-6.jpg' },
    // more slides...
  ];

  config: SwiperOptions = {
    grabCursor: true, centeredSlides: true, loop: true, slidesPerView: 1.5, speed: 1000, autoplay: { delay: 3000, disableOnInteraction: false },
            effect: "coverflow", coverflowEffect: { rotate: 4, stretch: 0, depth: 50, modifier: 5, slideShadows: true },
            navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
            keyboard: { enabled: true },
            breakpoints: {
                640: { slidesPerView: 2.5 },
                768: { slidesPerView: 2.515 },
                1024: { slidesPerView: 3.54 },
                1280: { slidesPerView: 3.59 },
                1536: { slidesPerView: 3.635 }
            },
  };
  ngAfterViewInit() {
    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, this.config);
    swiperEl.initialize();

    const swiper = swiperEl.swiper;
    console.log('Active index:', swiper.activeIndex);
  }
  goToPath(path:string): void {
    this.router.navigate([`/${path}`]);
  }
}
