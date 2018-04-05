import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../gem-model';
import { CartModel } from '../cart-model';
import { CartItemModel } from '../cart-item-model';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  @Input() gem: GemModel;
  @Input() cart: CartModel;

  addToCart(gem) {
    this.cart.totalQuantity += 1;
    this.gem.inventory -= 1;
    this.cart.items.push(gem);
    this.cart.totalPrice += this.gem.price;
  }

  constructor() { }

  ngOnInit() {
  }

}
