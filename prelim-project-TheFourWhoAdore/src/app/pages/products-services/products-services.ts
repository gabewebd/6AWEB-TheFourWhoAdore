import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  desc: string;
  badge?: string;
}

@Component({
  selector: 'app-products-services',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './products-services.html',
  styleUrl: './products-services.css'
})
export class ProductsServices {
  
  // 1. Define the categories for your filter buttons
  categories: string[] = ['All', 'Fragrance', 'Makeup', 'Skincare', 'Bags', 'Ready-to-Wear', 'Accessories'];
  
  // 2. Track current selections
  activeCategory: string = 'All';
  currentSort: string = 'Featured'; // Display text
  currentSortValue: string = 'featured'; // Internal value
  
  // 3. Dropdown state
  showSortDropdown: boolean = false;

  // 4. This is the Master List (The Data)
  products: Product[] = [
    {
      id: 1,
      name: "No. 5 Eau de Parfum",
      category: "Fragrance",
      price: 165.00,
      image: "assets/no5.jpg", 
      desc: "The eternal, legendary fragrance. A floral bouquet composed around May Rose and Jasmine.",
      badge: "Iconic"
    },
    {
      id: 2,
      name: "Coco Mademoiselle",
      category: "Fragrance",
      price: 145.00,
      image: "assets/coco.jpg",
      desc: "A fresh and ambery fragrance. Distinctive, modern, and surprisingly fresh."
    },
    {
      id: 3,
      name: "Rouge Coco – Gabrielle",
      category: "Makeup",
      price: 48.00,
      image: "assets/lipstick.jpg",
      desc: "Hydrating vibrant lip color in a classic, deep red hue. Long-lasting comfort."
    },
    {
      id: 4,
      name: "Les Beiges Glow",
      category: "Makeup",
      price: 65.00,
      image: "assets/foundation.jpg",
      desc: "A light-to-medium coverage foundation that creates a naturally radiant complexion."
    },
    {
      id: 5,
      name: "Hydra Beauty Serum",
      category: "Skincare",
      price: 110.00,
      image: "assets/serum.jpg",
      desc: "Intense smoothing and plumping hydration with Camellia micro-droplets."
    },
    {
      id: 6,
      name: "Classic Flap Bag",
      category: "Bags",
      price: 10200.00,
      image: "assets/bag-black.jpg",
      desc: "The iconic handbag in durable white caviar leather with gold-tone metal hardware.",
      badge: "Best Seller"
    },
    {
      id: 7,
      name: "Boy Chanel Bag",
      category: "Bags",
      price: 6600.00,
      image: "assets/bag-beige.jpg",
      desc: "A modern, boxy silhouette in beige calfskin with an antique gold-tone finish."
    },
    {
      id: 8,
      name: "Pearl Earrings",
      category: "Accessories",
      price: 675.00,
      image: "assets/earrings.jpg",
      desc: "Elegant metal, glass pearl, and strass earrings featuring the signature CC logo."
    },
    {
      id: 9,
      name: "Tweed Flap Bag & Jacket Ensemble",
      category: "Ready-to-Wear & Bags",
      price: 8500.00,
      image: "assets/clothes2.jpg",
      desc: "A chic black and white tweed jacket and shorts paired with a matching classic flap bag and cap."
    },
    {
      id: 10,
      name: "Sequin Top & Silver Handbag",
      category: "Ready-to-Wear & Bags",
      price: 7200.00,
      image: "assets/clothes1.jpg",
      desc: "A glamorous sequined black top and high-waisted shorts accented with bold gold jewelry and a large silver quilted tote."
    },
    {
      id: 11,
      name: "Monochrome Tweed Ensemble",
      category: "Ready-to-Wear",
      price: 6800.00,
      image: "assets/clothes-bnw.jpg",
      desc: "A bold, avant-garde look featuring a white tweed jacket with black trim over a textured swimsuit silhouette."
    },
    {
      id: 12,
      name: "Sheer Lace & Cuff Bracelet",
      category: "Ready-to-Wear",
      price: 11500.00,
      image: "assets/clothes-dua.jpg",
      desc: "A delicate sheer lace set, highlighted by a statement CC cuff bracelet and a quilted drawstring bucket bag."
    },
    {
      id: 13,
      name: "Black Knit & Two-Tone Heels",
      category: "Ready-to-Wear",
      price: 4200.00,
      image: "assets/clothes-kate.jpg",
      desc: "A timeless black knit dress accented with a pearl waist chain and the iconic beige and black block heel pumps."
    },
    {
      id: 14,
      name: "Crystal CC Necklace",
      category: "Accessories",
      price: 725.00,
      image: "assets/chanel-necklace.jpg",
      desc: "A delicate gold-tone chain featuring the signature CC logo encrusted with sparkling crystals."
    },
    {
      id: 15,
      name: "N°1 DE CHANEL Eye Serum",
      category: "Skincare",
      price: 98.00,
      image: "assets/chanel-skincare.jpg",
      desc: "A revitalizing eye serum concentrated with Red Camellia extract to smooth and brighten the gaze."
    },
    {
      id: 16,
      name: "UV Essentiel & CC Duo",
      category: "Skincare",
      price: 115.00,
      image: "assets/skincare-sunscreen.jpg",
      desc: "The ultimate protection set featuring high-protection SPF 50 mist and a color-correcting complexion cream."
    },
    {
      id: 17,
      name: "Le Volume Révolution",
      category: "Makeup",
      price: 40.00,
      image: "assets/chanel-mascara.jpg",
      desc: "The first mascara with a 3D-printed brush, delivering extreme volume and perfect precision."
    }
  ];

  // 5. This is the Display List (What users see)
  filteredProducts: Product[] = [];

  constructor() {
    // Initialize the view with all products
    this.filteredProducts = [...this.products];
  }

  // Toggle dropdown visibility
  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
  }

  // LOGIC: Filter by Category
  filterCategory(category: string) {
    this.activeCategory = category;
    this.applyFilters();
  }

  // LOGIC: Sort by Price (Updated for custom dropdown)
  onSortChange(value: string) {
    // Update display text
    if (value === 'featured') {
      this.currentSort = 'Featured';
    } else if (value === 'low-high') {
      this.currentSort = 'Low to High';
    } else if (value === 'high-low') {
      this.currentSort = 'High to Low';
    }
    
    // Update internal value
    this.currentSortValue = value;
    
    // Close dropdown
    this.showSortDropdown = false;
    
    // Apply filters
    this.applyFilters();
  }

  // MASTER FUNCTION: Applies both filter and sort
  applyFilters() {
    // 1. Filter
    if (this.activeCategory === 'All') {
      this.filteredProducts = [...this.products];
    } else {
      // Use 'includes' so "Ready-to-Wear & Bags" shows up for both categories
      this.filteredProducts = this.products.filter(product => 
        product.category.includes(this.activeCategory)
      );
    }

    // 2. Sort
    if (this.currentSortValue === 'low-high') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.currentSortValue === 'high-low') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } 
    // If 'featured', we don't sort (keeps default ID order)
  }
}