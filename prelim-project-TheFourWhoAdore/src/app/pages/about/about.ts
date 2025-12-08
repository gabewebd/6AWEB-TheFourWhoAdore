import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // 1. YOUR TEAM MEMBERS (I kept your updates)
  teamMembers = [
    { 
      name: 'Member One', 
      role: 'Lead Developer', 
      // Make sure to put an image file in public/images/ for this person!
      image: 'images/member1.jpg' 
    },  
    { 
      name: 'Member Two', 
      role: 'UI/UX Designer', 
      // Make sure to put an image file in public/images/ for this person!
      image: 'images/member2.jpg' 
    },
    { 
      name: 'Mark Dave Camus', 
      role: 'Frontend Engineer', 
      image: 'images/dave.jpg' 
    },
    { 
      name: 'Josh Andrei Aguiluz', 
      role: 'Project Manager', 
      image: 'images/josh.jpg' 
    }
  ];

  // 2. THE MISSING VALUES SECTION (This fixes the error!)
  values = [
    {
      title: 'Audacity',
      description: 'To break the rules, you must first master them. We embrace the unexpected.',
      icon: 'diamond' 
    },
    {
      title: 'Perfection',
      description: 'The devil is in the details. We obsess over every pixel and stitch.',
      icon: 'verified'
    },
    {
      title: 'Heritage',
      description: 'Innovation is rooted in history. We honor the past while building the future.',
      icon: 'history_edu'
    }
  ];
}