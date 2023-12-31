import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProducts():Observable<Array<Product>>{
    return this.http.get<Array<any>>("http://localhost:8089/products");
  }
  public checkProduct(product:Product):Observable<any>{
    return this.http.patch<Product>('http://localhost:8089/products/${product.id}',{checked:!product.checked});
  }
  public deleteProduct(product:Product){
    return this.http.delete<any>('http://localhost:8089/products/${product.id}');
  }
  saveProduct(product: Product) {
    return this.http.post<Product>('http://localhost:8089/products',product);
  }
}
