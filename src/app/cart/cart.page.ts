import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';
import { ShoppingCart } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  totalPrice: Number = 0
  totalNumber: Number = 0
  shoppingCart: ShoppingCart[] = this.systemService.shoppingCart
  receiveMethod: String = "店舗受取"
  payMethod: String = "現金"
  toShopMemo: String = ""

  constructor(private router: Router,
              private systemService: SystemService
              ) {
    
  }

  ngOnInit() {
    if (!this.shoppingCart.length) {
      this.router.navigate(['/tabs/tab1'])
      setTimeout(() => {
        this.shoppingCart = this.systemService.shoppingCart
      }, 1000);
    }
    this.getTotalPrice()
    this.getTotalNumber()
  }

  getTotalPrice() {
    this.systemService.getTotalPrice().subscribe(
      totalPrice =>
        this.totalPrice = totalPrice
    );
  }
  getTotalNumber() {
    this.systemService.getTotalNumber().subscribe(
      totalNumber =>
        this.totalNumber = totalNumber
    );
  }
  
  toOrderComplete() {
    let orderDetail = {
      ReceiveMethod: this.receiveMethod,
      PayMethod: this.payMethod,
      ToShopMemo: this.toShopMemo,
    }
    this.systemService.saveOrder(orderDetail)
    this.router.navigate(['/tabs/tab1/order-complete'])
  }

}
