import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { environment } from './envirorment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl; // Use the apiUrl from the environment

  constructor(private http: HttpClient) {}

  saveProduct(product: Product) {
    debugger
    return this.http.post(this.apiUrl+"Product", product);
  }
  
  getProduct() {
    debugger
    return this.http.get(this.apiUrl+"Product");
  }
}

