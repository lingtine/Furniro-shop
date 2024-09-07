import { Component } from "@angular/core";
import { catalog } from "../../../utils/constant";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-catalog",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./catalog.component.html",
  styleUrl: "./catalog.component.scss",
})
export class CatalogComponent {
  catalog = catalog;
}
