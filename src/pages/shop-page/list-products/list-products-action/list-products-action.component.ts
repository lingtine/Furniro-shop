import { Component, signal } from "@angular/core";
import { DropdownModule } from "primeng/dropdown";
@Component({
  selector: "app-list-products-action",
  standalone: true,
  imports: [DropdownModule],
  templateUrl: "./list-products-action.component.html",
  styleUrl: "./list-products-action.component.scss",
})
export class ListProductsActionComponent {
  sizeListProducts = signal<{ name: string } | undefined>(undefined);
  listSize: { name: string }[] = [
    {
      name: "8",
    },
    {
      name: "16",
    },
    { name: "32" },
  ];
}
