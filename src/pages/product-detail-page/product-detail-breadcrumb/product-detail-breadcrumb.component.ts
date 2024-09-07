import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-detail-breadcrumb.component.html',
  styleUrl: './product-detail-breadcrumb.component.scss',
})
export class ProductDetailBreadcrumbComponent {
  nameProduct = signal<string>('Asgaard sofa');
}
