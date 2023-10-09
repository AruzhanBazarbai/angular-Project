import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: {[id:number]:number} = { 1: 400, 3: 335, 4:350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubscription: Subscription | undefined;
  token: any;

  constructor(private _cartService: CartService, private storeService: StoreService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getProducts();
    // this.authService.login("aruzhanart2003@mail.ru", "123456789").subscribe((data) => {
    //       this.token = data;
    //       console.log(this.token)
    //     localStorage.setItem("token", this.token.token);
    // });
  }
  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category).subscribe((_products) => {
      this.products = _products;
    })
  }
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onItemsCountChange(itemsCount: number): void {
    this.count = itemsCount.toString();
    this.getProducts();
  }
  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }
  onShowCategory(ctg: string): void {
    this.category = ctg;
    this.getProducts();
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
  onSubmit(): void {
    // this.authService.checkUserIfExists("Aruzhan", "123456789");
  }
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

}
