import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit{
  private _cart: Cart = { items: []};
  itemsQuantity = 0;
  auth : boolean | undefined;

  @Input()

  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current)=> prev + current, 0);
  }

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.auth = true;
    } else {
      this.auth = false;
    }
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  onClearCard() {
    this.cartService.clearCart();
  }
  logout() {
    localStorage.removeItem("token")
    this.auth = false;
  }
  login() {
    this.router.navigate(['/login']);
    this.auth = true;
  }
}
