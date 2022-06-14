import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private CartService: CartService
  ) { }

  ngOnInit(): void { }

  itemCount(){
    return this.CartService.itemsCount();
  }
  gotoLogin(){
    this.router.navigate(['login'])
  }
  gotoShopp(){
    this.router.navigate(['cart'])
  }
  gotoServic(){
    this.router.navigate(['servicios'])
  }
  gotoShopPage(){
    this.router.navigate(['shop-page'])
  }
  gotoBlog(){
    this.router.navigate(['blog'])
    }
  gotoAboutUs(){
    this.router.navigate(['about-us'])
   }
   gotoHome(){
     this.router.navigate(['home'])
   }
}
