import { Component, input } from "@angular/core";
import { IProduct } from "../../../../modals/types";
import { CartPageComponent } from "../../../cart-page/cart-page.component";
import { ProductCardComponent } from "../../../../shared/components/product-card/product-card.component";
@Component({
  selector: "app-list-item",
  standalone: true,
  imports: [CartPageComponent, ProductCardComponent],
  templateUrl: "./list-item.component.html",
  styleUrl: "./list-item.component.scss",
})
export class ListItemComponent {
  products = input.required<IProduct[]>();
}
