import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Employee {
  employeeNumber: string;
  fullName: string;
  gender: string;
  email: string;
  employmentStatus: 'Active' | 'On Leave' | 'Terminated';
  salary: number;
  department: string;
  jobTitle: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-employee-directory',
  imports: [CommonModule], 
  templateUrl: './employee-directory.html',
  styleUrl: './employee-directory.css',
  standalone: true
})
export class EmployeeDirectory {
  selectedDepartment = signal<string>('All Departments');
  sortBy = signal<'Name' | 'Department' | 'Salary'>('Name');
  showSortDropdown = signal<boolean>(false);
  
  bannerImage = 'https://t3.ftcdn.net/jpg/15/32/09/72/360_F_1532097278_kIgidE5vSO1olWdftSApbjdFYZsf1Xhi.jpg';

  employees = signal<Employee[]>([
    {
      employeeNumber: 'EMP001',
      fullName: 'Virginie Viard',
      gender: 'Female',
      email: 'virginie.viard@chanel.com',
      employmentStatus: 'Active',
      salary: 250000,
      department: 'Fashion',
      jobTitle: 'Creative Director (Haute Couture, Ready-to-Wear)',
      imageUrl: 'https://wwd.com/wp-content/uploads/2019/02/virginie_viard_photo-by-karl-lagerfeld.jpg'
    },
    {
      employeeNumber: 'EMP002',
      fullName: 'Olivier Polge',
      gender: 'Male',
      email: 'olivier.polge@chanel.com',
      employmentStatus: 'Active',
      salary: 230000,
      department: 'Fragrance & Beauty',
      jobTitle: 'Master Perfumer',
      imageUrl: 'https://ellesg-prod.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2025/01/168.png'
    },
    {
      employeeNumber: 'EMP003',
      fullName: 'Leena Nair',
      gender: 'Female',
      email: 'leena.nair@chanel.com',
      employmentStatus: 'Active',
      salary: 500000,
      department: 'Corporate',
      jobTitle: 'Global CEO',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Leena-Nair-Chief-HR-Officer_%28cropped%29.jpg'
    },
    {
      employeeNumber: 'EMP004',
      fullName: 'Patrice Leguéreau',
      gender: 'Male',
      email: 'patrice.leguereau@chanel.com',
      employmentStatus: 'Active',
      salary: 210000,
      department: 'Fine Jewelry',
      jobTitle: 'Director of Fine Jewelry Creation Studio',
      imageUrl: 'https://wwd.com/wp-content/uploads/2024/11/Patrice-Leguereau-.tif_JPEG-HAUTE-DEFINITION.jpeg'
    },
    {
      employeeNumber: 'EMP005',
      fullName: 'Philippe Blondiaux',
      gender: 'Male',
      email: 'philippe.blondiaux@chanel.com',
      employmentStatus: 'Active',
      salary: 400000,
      department: 'Corporate',
      jobTitle: 'Global Chief Financial Officer',
      imageUrl: 'https://www.imd.org/annual-reports/wp-content/uploads/2023/03/Philippe-Blondiaux_final_5.jpg'
    },
    {
      employeeNumber: 'EMP006',
      fullName: 'Bruno Pavlovsky',
      gender: 'Male',
      email: 'bruno.pavlovsky@chanel.com',
      employmentStatus: 'Active',
      salary: 300000,
      department: 'Fashion',
      jobTitle: 'President of Fashion',
      imageUrl: 'https://monocle.com/wp-content/uploads/legacy/article/portrait-of-bruno-pavlovsky.jpg?w=1296'
    },
    {
      employeeNumber: 'EMP007',
      fullName: 'Amanda Sanchez',
      gender: 'Female',
      email: 'amanda.sanchez@chanel.com',
      employmentStatus: 'Active',
      salary: 120000,
      department: 'Fashion',
      jobTitle: 'In-House Fitting Model',
      imageUrl: 'https://images.ft.com/v3/image/raw/ftcms%3Aeed9d52c-df54-41f6-9385-b8f762348bc3?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1'
    },
    {
      employeeNumber: 'EMP008',
      fullName: 'Eric Pfrunder',
      gender: 'Male',
      email: 'eric.pfrunder@chanel.com',
      employmentStatus: 'Active',
      salary: 260000,
      department: 'Corporate',
      jobTitle: 'Image Director Emeritus',
      imageUrl: 'https://media.fashionnetwork.com/cdn-cgi/image/format=auto/m/1933/4fe5/45b7/6960/bc89/0d20/6c26/eb06/3854/4f09/4f09.png'
    }
  ]);

  departments = [
    'All Departments',
    'Fashion',
    'Fragrance & Beauty',
    'Fine Jewelry',
    'Watches',
    'Corporate'
  ];
  
  sortOptions: { value: 'Name' | 'Department' | 'Salary', label: string }[] = [
    { value: 'Name', label: 'Name' },
    { value: 'Department', label: 'Department' },
    { value: 'Salary', label: 'Salary' }
  ];

  filteredAndSortedEmployees = computed(() => {
    let filtered = this.employees();
    
    // Filter by department
    if (this.selectedDepartment() !== 'All Departments') {
      filtered = filtered.filter(emp => emp.department === this.selectedDepartment());
    }
    
    // Sort
    const sorted = [...filtered].sort((a, b) => {
      if (this.sortBy() === 'Name') {
        return a.fullName.localeCompare(b.fullName);
      } else if (this.sortBy() === 'Department') {
        return a.department.localeCompare(b.department);
      } else {
        // Sort by salary descending (highest salary first)
        return b.salary - a.salary; 
      }
    });
    
    return sorted;
  });

  selectDepartment(dept: string) {
    this.selectedDepartment.set(dept);
  }

  setSortBy(sort: 'Name' | 'Department' | 'Salary') {
    this.sortBy.set(sort);
    this.showSortDropdown.set(false);
  }

  toggleSortDropdown() {
    this.showSortDropdown.set(!this.showSortDropdown());
  }
}