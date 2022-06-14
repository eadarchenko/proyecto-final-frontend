import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

   items : Product [] =  [];

  constructor(private router: Router) { }

  addToCart(product : Product):void{
    this.items.push(product);
    this.router.navigate(['cart'])
  }

  getItems(){
    return this.items;
  }

  itemsCount(){
     return this.items.length;
   }

  clear(){
    this.items = [];
    return this.items;
  }
}
