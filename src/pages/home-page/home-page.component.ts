import { Component } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { OurProductsComponent } from "./our-products/our-products.component";
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    BannerComponent,
    CatalogComponent,
    OurProductsComponent,
    CarouselComponent,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent {}
