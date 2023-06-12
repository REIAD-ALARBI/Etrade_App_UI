import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[];
  constructor(private productServices: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productServices.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
