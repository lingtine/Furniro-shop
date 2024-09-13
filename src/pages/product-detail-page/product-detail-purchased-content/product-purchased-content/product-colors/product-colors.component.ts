import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-colors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-colors.component.html',
  styleUrl: './product-colors.component.scss',
})
export class ProductColorsComponent {
  listColors = input.required<string[]>();
  selectedColor = signal<number>(0);

  handleSelected(index: number) {
    this.selectedColor.set(index);
  }
}
