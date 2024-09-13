import { Component, input, signal } from '@angular/core';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductAdditionalInfoComponent } from './product-additional-info/product-additional-info.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { IProduct } from '../../../modals/types';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail-infor',
  standalone: true,
  imports: [
    ProductDescriptionComponent,
    ProductAdditionalInfoComponent,
    ProductReviewsComponent,
    CommonModule,
  ],
  templateUrl: './product-detail-infor.component.html',
  styleUrl: './product-detail-infor.component.scss',
})
export class ProductDetailInforComponent {
  selected = signal<number>(0);
  product = signal<IProduct>({
    id: '1',
    category: {
      id: 'category_1',
      name: 'Sofas',
    },
    colors: ['816DFA', '000000', 'B88E2F'],
    description:
      'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    name: 'Asgaard sofa',
    price: 250000,
    rate: 5,
    sizes: ['l', 'xl', 'xs'],
    sku: 'SS001',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
    reviews: [
      {
        id: '1',
        message: 'Hàng Tốt',
        namReviewer: 'Nguyễn Hùng Anh',
        userId: 'ul1',
      },
    ],
    imageUrl: 'assets/images/product/Asgaard sofa 3.png',
    images: [
      'assets/images/product/Maya sofa three seater (1) 1.png',
      'assets/images/product/Outdoor sofa set 2.png',
      'assets/images/product/Outdoor sofa set_2 1.png',
      'assets/images/product/Stuart sofa 1.png',
    ],
  });
}
