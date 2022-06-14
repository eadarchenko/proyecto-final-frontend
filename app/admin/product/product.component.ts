import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: Product[] = [];

  constructor(public service: AdminService) {
    this.service.getArticles().subscribe((resp: any) => {
      console.log(resp);
      this.product = resp.data
    })
  }
  ngOnInit(): void {
  }

}
