import { Component, input } from "@angular/core";

@Component({
  selector: "app-list-products-pagination",
  standalone: true,
  imports: [],
  templateUrl: "./list-products-pagination.component.html",
  styleUrl: "./list-products-pagination.component.scss",
})
export class ListProductsPaginationComponent {
  pageIndex = input.required<number>();
  pageSize = input.required<number>();
  totalCount = input.required<number>();

  getPagination = () => {
    const pages = [];
    const maxSizePage = Math.ceil(this.totalCount() / this.pageSize());
    if (maxSizePage === 1) {
      pages.push(1);
      return pages;
    }
    const startPage = Math.max(2, this.pageIndex() - 2);
    const endPage = Math.min(maxSizePage - 1, this.pageIndex() + 2);

    pages.push(1); // Always show the first page

    if (startPage > 3) {
      pages.push("..."); // Ellipsis for skipped pages
    }

    for (let i = startPage; i < endPage; i++) {
      pages.push(i);
    }

    if (endPage < maxSizePage - 1) {
      pages.push("...");
    }

    pages.push(maxSizePage - 1); // Always show the last page

    return pages;
  };
}
