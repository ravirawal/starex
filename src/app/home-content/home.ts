import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { SwiperOptions } from 'swiper/types';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatGridListModule, MatCardModule, MatIconModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  constructor(private router: Router){

  }
   @ViewChild('swiperRef') swiperRef!: ElementRef;
    //@ViewChild('crcLogoSwiperRef') crcLogoSwiperRef!: ElementRef;
    @ViewChild('counterDiv') counterDiv!: ElementRef;
     @ViewChild('counterReserchDiv') counterReserchDiv!: ElementRef;
     imageVisible = signal(false);
  @ViewChild('imgRef') imgRef!: ElementRef;
countLibrary = signal(30000);             // target value
  displayLibraryValue = signal(0);        // visible animated count
  hasIntersected = signal(false); 
countReserch = signal(12000); // flag for visibility
displayReserchValue = signal(0)

  config: SwiperOptions = {
    grabCursor: true, centeredSlides: true, loop: true, slidesPerView: 1.5, speed: 1000, autoplay: { delay: 3000, disableOnInteraction: false },
            effect: "coverflow", coverflowEffect: { rotate: 4, stretch: 0, depth: 50, modifier: 5, slideShadows: true },
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
    setTimeout(()=>{
const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, this.config);
    swiperEl.initialize();
    },0)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          this.hasIntersected.set(true); // trigger count once
          this.startLibraryCounting();
          this.startReserchCounting();
           observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // trigger when 50% of div is visible
    );
    const professorObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
       this.imageVisible.set(true);
       professorObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // trigger when 50% of div is visible
    );
    observer.observe(this.counterDiv.nativeElement);
    observer.observe(this.counterReserchDiv.nativeElement);
    professorObserver.observe(this.imgRef.nativeElement)
  }
  goToPath(path:string): void {
    this.router.navigate([`/${path}`]);
  }
  

 ngOnInit(): void {
    
  }

  startLibraryCounting(): void {
    let current = 0;
    const interval = setInterval(() => {
      if (current < this.countLibrary()) {
        current= current+100;
        this.displayLibraryValue.set(current);
      } else {
        clearInterval(interval);
      }
    }, 10); // adjust speed here
  }
startReserchCounting(): void {
    let current = 0;
    const interval = setInterval(() => {
      if (current < this.countReserch()) {
        current= current+70;
        this.displayReserchValue.set(current);
      } else {
        clearInterval(interval);
      }
    }, 10); // adjust speed here
  }


  // slides = [
  //   { title: 'Slide 1', image: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  //   { title: 'Slide 2', image: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  //   { title: 'Slide 3', image: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  //   { title: 'Slide 4', image: 'https://swiperjs.com/demos/images/nature-4.jpg' },
  //   { title: 'Slide 5', image: 'https://swiperjs.com/demos/images/nature-5.jpg' },
  //   { title: 'Slide 6', image: 'https://swiperjs.com/demos/images/nature-6.jpg' },
  //   // more slides...
  // ];

}
