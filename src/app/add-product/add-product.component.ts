import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public prod : Product;
  productName : string;
  productOwner: string;
  productDescription : string;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    
  }

  addProduct(){
    console.log("clicked" + " " +this.productName);
    this.prod = new Product();
    this.prod.id = 0;
    this.prod.name = this.productName;
    this.prod.description = this.productDescription;
    console.log(this.prod.name);
    this.prod.entrDate = null; 
    this.prod.ownerName = this.productOwner;
    var jsonData = JSON.stringify(this.prod);
    console.log(jsonData);
    const req = this.http.post('http://localhost:56130/api/products',jsonData,{headers:{'Content-Type':'application/json; charset=utf-8'}}).subscribe(res=>{console.log(res)});
    this.productName= "";
    this.productOwner = "";
    this.productDescription = "";
  }

  postProduct(){

  }
}
