import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cart: Cart = {items: [{
    product: 'https://www.cln.com.ph/cdn/shop/files/Brund4_Bone_8_1024x1024.jpg?v=1691988483',
    name: 'sneackers',
    price: 150,
    quantity: 1,
    id: 1,
  },
  {
    product: 'https://www.cln.com.ph/cdn/shop/files/Brund4_Bone_8_1024x1024.jpg?v=1691988483',
    name: 'sneackers',
    price: 150,
    quantity: 3,
    id: 2,
  }
]};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number{
    return items.
      map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0)

  }

}
