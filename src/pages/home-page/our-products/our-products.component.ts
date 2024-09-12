import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';

import { IProduct } from '../../../modals/types';
import { ListProductComponent } from './list-product/list-product.component';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [ProductCardComponent, ListProductComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss',
})
export class OurProductsComponent {
  products: IProduct[] = [
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
  ];
}
