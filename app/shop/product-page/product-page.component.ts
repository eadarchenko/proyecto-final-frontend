import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import    Swal  from 'sweetalert2';
import { Product } from 'src/app/interfaces/product';
import { products } from 'src/mock-productos';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product : Product | undefined;

  constructor(
    private route :  ActivatedRoute,
    private cartService : CartService
    ) {}

  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFormRoute = Number(routerParams.get('productId'));
    this.product = products.find(product => product.id  === productIdFormRoute);
  }
  addToCart(product : any){
   this.cartService.addToCart(product);
   Swal.fire(
    'El producto se ha añadido correctmente al carrito !')
  }
}
