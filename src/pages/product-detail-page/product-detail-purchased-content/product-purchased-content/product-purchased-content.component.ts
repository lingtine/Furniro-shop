import { Component, input, signal } from '@angular/core';
import { IProduct } from '../../../../modals/types';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductSizesComponent } from './product-sizes/product-sizes.component';
import { ProductColorsComponent } from './product-colors/product-colors.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-purchased-content',
  standalone: true,
  imports: [
    RatingModule,
    CommonModule,
    FormsModule,
    ProductSizesComponent,
    ProductColorsComponent,
    InputNumberModule,
    ButtonModule,
  ],
  templateUrl: './product-purchased-content.component.html',
  styleUrl: './product-purchased-content.component.scss',
})
export class ProductPurchasedContentComponent {
  product = input.required<IProduct>();
  numberProduct = signal<number>(0);
}
