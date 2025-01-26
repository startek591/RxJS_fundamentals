import { Component } from '@angular/core';
import { Product } from '../product';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
})
export class ProductListComponent {
  pageTitle = 'Products';
  errorMessage = '';

  products: Product[] = [];

  selectedProductId: number = 0;

  onSelected(productId: number): void {
    this.selectedProductId = productId;
  }
}
