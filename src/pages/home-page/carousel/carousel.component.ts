import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [ButtonModule],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.scss",
})
export class CarouselComponent {}
