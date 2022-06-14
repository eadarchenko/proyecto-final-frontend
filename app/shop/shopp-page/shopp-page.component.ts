import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from 'src/mock-productos';
import { Product } from 'src/app/interfaces/product';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-shopp-page',
  templateUrl: './shopp-page.component.html',
  styleUrls: ['./shopp-page.component.scss']
})
export class ShoppPageComponent implements OnInit {

  public  products : Product [] = products ;

  constructor() { }

  ngOnInit(): void {
  }
}
