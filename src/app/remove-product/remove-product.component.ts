import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';


@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {
  products : Product[];
  clickedId :number;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    return this.http.get<Product[]>("http://localhost:56130/api/products").subscribe((data : Product[])=>{
      this.products = data;
      console.log(this.products[0].entrDate)
    });
  }
  removeProduct(productId){
    console.log('ID is : ' + productId);
    this.http.delete("http://localhost:56130/api/products/"+productId).subscribe(res=>{
      console.log(res);
      this.getProducts();
    });
  }
}
