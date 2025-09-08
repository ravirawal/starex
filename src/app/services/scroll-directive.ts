import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[scrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.el.nativeElement, 'reveal');
        observer.unobserve(this.el.nativeElement);
      }
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement);
  }
}
