import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all page s
import { Home } from './pages/home/home';
import { EmployeeDirectory } from './pages/employee-directory/employee-directory';
import { About } from './pages/about/about';
import { ProductsServices } from './pages/products-services/products-services';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'employees', component: EmployeeDirectory },
  { path: 'about', component: About },
  { path: 'products-services', component: ProductsServices },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }