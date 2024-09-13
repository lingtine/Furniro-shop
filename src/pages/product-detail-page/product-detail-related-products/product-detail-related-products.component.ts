import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ListRelatedProductComponent } from './list-related-product/list-related-product.component';
import { IProduct } from '../../../modals/types';

@Component({
  selector: 'app-product-detail-related-products',
  standalone: true,
  imports: [ButtonModule, ListRelatedProductComponent],
  templateUrl: './product-detail-related-products.component.html',
  styleUrl: './product-detail-related-products.component.scss',
})
export class ProductDetailRelatedProductsComponent {
  products = signal<IProduct[]>([
    {
      description: 'Stylish cafe chair',
      name: 'Syltherine',
      imageUrl: 'assets/images/product_1.png',
      price: 2500000,
      id: Math.random().toString(),
      status: 'Sales',
      fullPrice: 3500000,
    },
    {
      description: 'Stylish cafe chair',
      name: 'Syltherine',
      imageUrl: 'assets/images/product_1.png',
      price: 2500000,
      id: Math.random().toString(),
      status: 'Sales',
      fullPrice: 3500000,
    },
    {
      description: 'Stylish cafe chair',
      name: 'Syltherine',
      imageUrl: 'assets/images/product_1.png',
      price: 2500000,
      id: Math.random().toString(),
      status: 'Sales',
      fullPrice: 3500000,
    },
    {
      description: 'Stylish cafe chair',
      name: 'Syltherine',
      imageUrl: 'assets/images/product_1.png',
      price: 2500000,
      id: Math.random().toString(),
      status: 'Sales',
      fullPrice: 3500000,
    },
  ]);
}
