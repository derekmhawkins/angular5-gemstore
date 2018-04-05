import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gem-model';

import { GEMS } from '../gems';
import { CartModel } from '../cart-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeGems: GemModel[] = GEMS;

  @Input() cart: CartModel;

  constructor() { }

  ngOnInit() {
  }

}
