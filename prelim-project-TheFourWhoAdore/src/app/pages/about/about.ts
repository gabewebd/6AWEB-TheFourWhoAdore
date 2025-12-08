import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {

   bannerImage = 'https://t3.ftcdn.net/jpg/15/32/09/72/360_F_1532097278_kIgidE5vSO1olWdftSApbjdFYZsf1Xhi.jpg';
  
  // existing data...
  teamMembers = [
    { name: 'Josh Andrei Aguiluz', role: 'Project Manager', image: 'images/josh.jpg' },
    { name: 'Mark Dave Camus', role: 'Frontend Engineer', image: 'images/dave.jpg' },
    { name: 'Gabrielle Ainshley Velasquez', role: 'UX/UI Designer', image: 'images/ains.jpg' },
    { name: 'Mikaella Gabrielle Yamaguchi', role: 'Lead Developer', image: 'images/mik.jpg' }
  ];

  values = [
    { title: 'Audacity', description: 'To break the rules, you must first master them. We embrace the unexpected.', icon: 'diamond' },
    { title: 'Perfection', description: 'The devil is in the details. We obsess over every pixel and stitch.', icon: 'verified' },
    { title: 'Heritage', description: 'Innovation is rooted in history. We honor the past while building the future.', icon: 'history_edu' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // THIS IS THE ANIMATION ENGINE
  ngAfterViewInit() {
    // Check if we are in the browser (not server-side rendering)
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class that triggers CSS transition
            entry.target.classList.add('is-visible');
            // Optional: Stop observing once animated (performance)
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before bottom of screen
      });

      // Find all elements with class 'reveal-on-scroll'
      const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
      hiddenElements.forEach((el) => observer.observe(el));
    }
  }
}