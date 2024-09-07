import { Component } from "@angular/core";
import { ShopBreadcrumbComponent } from "./shop-breadcrumb/shop-breadcrumb.component";
import { ListProductsComponent } from "./list-products/list-products.component";

@Component({
  selector: "app-shop-page",
  standalone: true,
  imports: [ShopBreadcrumbComponent, ListProductsComponent],
  templateUrl: "./shop-page.component.html",
  styleUrl: "./shop-page.component.scss",
})
export class ShopPageComponent {}
