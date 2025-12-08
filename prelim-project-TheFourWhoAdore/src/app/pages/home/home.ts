import { Component, HostListener, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  
  heroImage = 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop';
  scrollY = 0;

  collections = [
    {
      title: 'Ready-to-Wear',
      description: 'The freedom of movement.',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1974&auto=format&fit=crop',
      link: '/products-services'
    },
    {
      title: 'Handbags',
      description: 'An extension of the silhouette.',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop',
      link: '/products-services'
    },
    {
      title: 'Fragrance',
      description: 'The unseen accessory.',
      image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1936&auto=format&fit=crop',
      link: '/products-services'
    }
  ];

  // Restored Content
  highlight = {
    title: 'The Spring-Summer 2025',
    subtitle: 'Haute Couture Collection',
    description: 'An ode to the freedom of movement and the elegance of the unexpected.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop'
  };

  values = [
    { icon: 'diamond', title: 'Audacity', text: 'To break the rules, you must first master them.' },
    { icon: 'verified', title: 'Perfection', text: 'The devil is in the details.' },
    { icon: 'history_edu', title: 'Heritage', text: 'Innovation rooted in history.' }
  ];

  @HostListener('window:scroll') 
  onScroll() {
    this.scrollY = window.scrollY;
  }

  getParallax(speed: number, offset: number = 0): string {
    return `translateY(${(this.scrollY * speed) + offset}px)`;
  }

  @ViewChildren('revealItem') revealItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Element comes into view: Grow it (Small -> Big)
            entry.target.classList.add('visible');
          } else {
            // Element leaves view: Shrink it (Big -> Small)
            entry.target.classList.remove('visible');
          }
        });
      }, { threshold: 0.15 }); // Trigger a bit later so it's smoother

      this.revealItems.forEach(item => {
        observer.observe(item.nativeElement);
      });
    }
  }
}