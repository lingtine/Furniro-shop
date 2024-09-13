import { Component } from '@angular/core';
import { ShopOutstandingComponent } from '../../shared/components/shop-outstanding/shop-outstanding.component';
import { BannerComponent } from '../home-page/banner/banner.component';
import { ShopBreadcrumbComponent } from '../../shared/components/shop-breadcrumb/shop-breadcrumb.component';

@Component({
  selector: 'app-product-comparison-page',
  standalone: true,
  imports: [ShopOutstandingComponent, BannerComponent, ShopBreadcrumbComponent],
  templateUrl: './product-comparison-page.component.html',
  styleUrl: './product-comparison-page.component.scss',
})
export class ProductComparisonPageComponent {}
