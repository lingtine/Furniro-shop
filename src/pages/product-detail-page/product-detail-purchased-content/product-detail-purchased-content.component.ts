import { Component, signal } from '@angular/core';
import { ProductInforImagesComponent } from './product-infor-images/product-infor-images.component';
import { ProductPurchasedContentComponent } from './product-purchased-content/product-purchased-content.component';
import { IProduct } from '../../../modals/types';

@Component({
  selector: 'app-product-detail-purchased-content',
  standalone: true,
  imports: [ProductInforImagesComponent, ProductPurchasedContentComponent],
  templateUrl: './product-detail-purchased-content.component.html',
  styleUrl: './product-detail-purchased-content.component.scss',
})
export class ProductDetailPurchasedContentComponent {
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
