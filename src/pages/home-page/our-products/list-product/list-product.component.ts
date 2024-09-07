import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IProduct } from "../../../../modals/types";
import { ProductCardComponent } from "../../../../shared/components/product-card/product-card.component";

@Component({
  selector: "app-list-product",
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: "./list-product.component.html",
  styleUrl: "./list-product.component.scss",
})
export class ListProductComponent {
  @Input() products!: IProduct[];
}
