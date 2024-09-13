import { Component, input } from '@angular/core';
import { IProduct } from '../../../../modals/types';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-list-related-product',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './list-related-product.component.html',
  styleUrl: './list-related-product.component.scss',
})
export class ListRelatedProductComponent {
  products = input.required<IProduct[]>();
}
