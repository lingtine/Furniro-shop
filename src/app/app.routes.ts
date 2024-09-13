import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ShopPageComponent } from '../pages/shop-page/shop-page.component';
import { ProductDetailPageComponent } from '../pages/product-detail-page/product-detail-page.component';
import { ProductComparisonPageComponent } from '../pages/product-comparison-page/product-comparison-page.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'shop',
    component: ShopPageComponent,
  },
  {
    path: 'shop/:id',
    component: ProductDetailPageComponent,
  },
  {
    path: 'comparison',
    component: ProductComparisonPageComponent,
  },
];
