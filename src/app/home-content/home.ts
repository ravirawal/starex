import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy, OnInit, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SwiperOptions } from 'swiper/types';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AboutComponent } from "../about_list/about/about";

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatGridListModule, MatCardModule, MatIconModule, AboutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {

  }

  crcSlidesPerView = 8;
  @ViewChild('swiperRef') swiperRef!: ElementRef;
  //@ViewChild('crcLogoSwiperRef') crcLogoSwiperRef!: ElementRef;
  @ViewChild('counterDiv') counterDiv!: ElementRef;
  @ViewChild('counterReserchDiv') counterReserchDiv!: ElementRef;
  imageVisible = signal(false);
  @ViewChild('imgRef') imgRef!: ElementRef;

  @ViewChild('posterImg') posterImg!: ElementRef;
  @ViewChild('videoEl') videoEl!: ElementRef;
  @ViewChild('wrapper') wrapper!: ElementRef;



  countLibrary = signal(30000);             // target value
  displayLibraryValue = signal(0);        // visible animated count
  hasIntersected = signal(false);
  countReserch = signal(12000); // flag for visibility
  displayReserchValue = signal(0)

  config: SwiperOptions = {
    grabCursor: true, centeredSlides: true, loop: true, slidesPerView: 1.2, speed: 1000, autoplay: { delay: 3000, disableOnInteraction: false },
    effect: "coverflow", coverflowEffect: { rotate: 4, stretch: 0, depth: 50, modifier: 5, slideShadows: true },
    navigation: { nextEl: ".facultynaviNext", prevEl: ".facultynaviPrev" },
    keyboard: { enabled: true },
    breakpoints: {
      640: { slidesPerView: 2.5 },
      800: { slidesPerView: 2.3 },
      1024: { slidesPerView: 3.4 },
      1280: { slidesPerView: 3.4 },
      1536: { slidesPerView: 3.635 }
    },
  };

  ngOnInit(): void {
    this.setSlidesPerView();

    window.addEventListener('resize', () => {
      this.setSlidesPerView();
    });
  }

  setSlidesPerView(): void {
    const width = window.innerWidth;

    if (width < 560) {
      this.crcSlidesPerView = 3;
    } else if (width >= 560 && width < 768) {
      this.crcSlidesPerView = 5;
    } else {
      this.crcSlidesPerView = 8; // default for larger screens
    }
  }


  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl = this.swiperRef.nativeElement;
      Object.assign(swiperEl, this.config);
      swiperEl.initialize();
    }, 0)
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
  goToPath(path: string): void {
    this.router.navigate([`/${path}`]);
  }


  startLibraryCounting(): void {
    let current = 0;
    const interval = setInterval(() => {
      if (current < this.countLibrary()) {
        current = current + 100;
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
        current = current + 70;
        this.displayReserchValue.set(current);
      } else {
        clearInterval(interval);
      }
    }, 10); // adjust speed here
  }
  onVideoLoaded() {
    this.posterImg.nativeElement.style.display = 'none';
    this.videoEl.nativeElement.style.display = 'block';
    this.wrapper.nativeElement.style.minHeight = '';
    this.wrapper.nativeElement.style.height = '';
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.setSlidesPerView);
  }


}
