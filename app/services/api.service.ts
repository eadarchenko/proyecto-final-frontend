import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../interfaces/product';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public _urlP = 'http://127.0.0.1:8000/api/product';

  public _urlA =  'http://127.0.0.1:8000/api/article';

  constructor(
    private http: HttpClient
    ) { }

      //funciones para el producto:

    getProduct() : Observable<Product[]> {
      return this.http.get<Product[]>(this._urlP);
    }

    addProduct(product:Product) : Observable<Product> {
      return this.http.post<Product>(this._urlP,product);
    }

    updateProduct(product:Product,id:number) : Observable<Product> {
      return this.http.put<Product>(`${this._urlP}/${product.id}`,product);
    }

    deleteProduct(product:Product) : Observable<boolean>{
      return this.http.delete<boolean>(`${this._urlP}/${product.id}`);
    }

    //funciones para el articulo:

    getArticle() : Observable<Article[]> {
      return this.http.get<Article[]>(this._urlA);
    }

    addArticle(article:Article) : Observable<Article> {
      return this.http.post<Article>(this._urlA,article);
    }

    updateArticle(article:Article,id:number) : Observable<Article> {
      return this.http.put<Article>(`${this._urlA}/${article.id}`,article);
    }

    deleteArticle(article:Article) : Observable<boolean>{
      return this.http.delete<boolean>(`${this._urlA}/${article.id}`);
    }
}
