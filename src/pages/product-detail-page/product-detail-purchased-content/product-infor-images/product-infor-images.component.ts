import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-info-images',
  standalone: true,
  imports: [],
  templateUrl: './product-infor-images.component.html',
  styleUrl: './product-infor-images.component.scss',
})
export class ProductInforImagesComponent {
  defaultImageSrc = input.required<string>();
  images = input.required<string[]>();
}
