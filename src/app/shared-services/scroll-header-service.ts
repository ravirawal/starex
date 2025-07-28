import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRouteService {
  showDiv = signal(false);

  constructor(private router: Router) {
    let isHome = false;

    // Track route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        isHome = event.url === '/home';
        this.evaluate(window.scrollY, isHome);
      }
    });

    // Track scroll globally
    window.addEventListener('scroll', () => {
      this.evaluate(window.scrollY, isHome);
    });
  }

  private evaluate(scrollY: number, isHome: boolean): void {
    this.showDiv.set(scrollY >= 50 && isHome);
  }
}
