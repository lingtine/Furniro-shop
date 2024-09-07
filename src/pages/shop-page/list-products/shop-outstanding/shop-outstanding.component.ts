import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-shop-outstanding",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./shop-outstanding.component.html",
  styleUrl: "./shop-outstanding.component.scss",
})
export class ShopOutstandingComponent {
  listItem = signal<
    {
      icon: string;
      title: string;
      subTitle: string;
      id: string;
    }[]
  >([
    {
      id: "1",
      icon: "pi pi-trophy",
      subTitle: "Crafted from top materials",
      title: "High Quality",
    },
    {
      id: "2",
      icon: "pi pi-verified",
      subTitle: "Over 2 years",
      title: "Warranty Protection",
    },
    {
      id: "3",
      icon: "pi pi-truck",
      subTitle: "Free Shipping",
      title: "Order over 150 $",
    },
    {
      id: "4",
      icon: "pi pi-phone",
      subTitle: "24 / 7 Supports",
      title: "24 / 7 Support",
    },
  ]);
}
