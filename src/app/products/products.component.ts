import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products : Array<Product>=[];
  constructor(private productService:ProductService){
  }
  ngOnInit() { 
    this.getProducts();   
  }
  getProducts(){
    this.productService.getProducts()
    .subscribe({
      next:data => {this.products=data},
      error: err=>{
        console.log(err);
      }
    })
    //this.products$=this.productService.getProducts();
  }
  

  handleCheckProduct(product:Product){
    this.productService.checkProduct(product)
    .subscribe({
      next:updatedProduct => {
        product.checked=!product.checked;
        //this.getProducts();
      }
    })
    product.checked=!product.checked;
  }
  handleDelete(product:Product){
    if(confirm("Etes vous sur ?"))
    this.productService.deleteProduct(product).subscribe({
      next:value =>{
        this.products=this.products.filter(p=>p.id!=product.id);
      }
    })
  }
}
