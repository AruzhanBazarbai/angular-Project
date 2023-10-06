import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    title: 'sneakers',
    price: 150,
    category: 'shoes',
    description: 'Description',
    image: 'https://www.cln.com.ph/cdn/shop/files/Brund4_Bone_8_1024x1024.jpg?v=1691988483',

  };
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);


  }

}
