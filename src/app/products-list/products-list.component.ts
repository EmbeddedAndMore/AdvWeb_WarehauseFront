import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products : Product[];
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getProducts().subscribe((data : Product[])=>{
        this.products = data;
        console.log(this.products[0].entrDate)
    });
  }

  getProducts(){
    return this.http.get<Product[]>("https://localhost:44393/api/products");
  }
}
