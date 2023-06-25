import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  public productForm!:FormGroup;
  constructor(private fb:FormBuilder, private productService:ProductService){}
  ngOnInit(){
    this.productForm=this.fb.group({
      name:this.fb.control(''),
      price:this.fb.control(''),
      checked:this.fb.control(false),
    });
  }
  saveProduct(){
    let product = this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next:data=>{
        alert(JSON.stringify(data));
      },error:err =>{
        console.log(err);
      }
    })
  }
}
