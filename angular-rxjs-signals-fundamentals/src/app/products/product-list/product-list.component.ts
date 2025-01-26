import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { ProductService } from '../product.service';
import { Subscription, tap } from 'rxjs';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage = '';
  sub!: Subscription;

  private productService = inject(ProductService);

  products: Product[] = [];

  selectedProductId: number = 0;

  ngOnInit(): void {
    this.sub = this.productService
      .getProducts()
      .pipe(tap(() => console.log('In component pipeline')))
      .subscribe((products) => {
        this.products = products;
        console.log('products', products);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSelected(productId: number): void {
    this.selectedProductId = productId;
  }
}
