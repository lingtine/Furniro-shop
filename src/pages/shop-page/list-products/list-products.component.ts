import { Component, signal } from "@angular/core";
import { ListProductsActionComponent } from "./list-products-action/list-products-action.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { IProduct } from "../../../modals/types";
import { ListProductsPaginationComponent } from "./list-products-pagination/list-products-pagination.component";
import { ShopOutstandingComponent } from "./shop-outstanding/shop-outstanding.component";

@Component({
  selector: "app-list-products",
  standalone: true,
  imports: [
    ListProductsActionComponent,
    ListItemComponent,
    ListProductsPaginationComponent,
    ShopOutstandingComponent,
  ],
  templateUrl: "./list-products.component.html",
  styleUrl: "./list-products.component.scss",
})
export class ListProductsComponent {
  listProducts = signal<IProduct[]>([]);
}
