import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-sizes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-sizes.component.html',
  styleUrl: './product-sizes.component.scss',
})
export class ProductSizesComponent {
  listSizeProduct = input.required<string[]>();
  selectedSize = signal<number>(0);

  handleSelected(index: number) {
    this.selectedSize.set(index);
  }
}
