import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc', ctg?: string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        ctg ? '/category/' + ctg : ''
      }?sort=${sort}&limit=${limit}`
    )
  }
  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(
      `${STORE_BASE_URL}/products/${id}`
    )
  }
  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    )
  }
}
