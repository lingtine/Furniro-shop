import { Component } from '@angular/core';
import { ProductDetailBreadcrumbComponent } from './product-detail-breadcrumb/product-detail-breadcrumb.component';
import { ProductDetailPurchasedContentComponent } from './product-detail-purchased-content/product-detail-purchased-content.component';
import { ProductDetailInforComponent } from './product-detail-infor/product-detail-infor.component';
import { ProductDetailRelatedProductsComponent } from './product-detail-related-products/product-detail-related-products.component';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [
    ProductDetailBreadcrumbComponent,
    ProductDetailPurchasedContentComponent,
    ProductDetailInforComponent,
    ProductDetailRelatedProductsComponent,
  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {}
