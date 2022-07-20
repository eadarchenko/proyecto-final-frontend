import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { products } from 'src/mock-productos';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  someValue = 1;
  i = 1
  total = 0;
  items = this.cartService.getItems();
  email = new FormControl('', [Validators.required, Validators.email]);
  checkoutForm: any;
  deletProduct: any;
  public myForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      myName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      myAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      mycity: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.items = this.cartService.clear();
    console.warn('your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  totalPrice() {
    this.total = 0;
    this.items.forEach(items => {
      this.total += this.someValue * items.price //no cuenta bien
    });

    return this.total
  }
  deleteItem(id: number) {
    this.items = this.items.filter(items => items.id != id)
  }
}











