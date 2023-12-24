import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  productId: string | undefined;
  product: Product | undefined;
  productSubscription: Subscription | undefined;


  constructor(private storeService: StoreService, private route: ActivatedRoute, private _cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
    this.getProduct();
  }

  getProduct(): void {
    this.productSubscription = this.storeService.getProductById(this.productId ?? "1").subscribe((_product) => {
      this.product = _product;
    })
  }
  onAddToCart(product: Product): void {
    this._cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }
}
