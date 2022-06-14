import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Article } from '../interfaces/article';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public _urlA = 'http://127.0.0.1:8000/api/article';

  public _urlP = 'http://127.0.0.1:8000/api/product';

  constructor(private httpClient: HttpClient) { }

  getArticles(){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json');

    return this.httpClient.get(this._urlA,{
      headers: header
    });
  }

  createArticle(article: Article): Observable<Article>{
    let httpHeaders = new HttpHeaders({  'Content-Type' : 'application/json',  'Cache-Control': 'no-cache' });
    let options = {  headers: httpHeaders };
   return this.httpClient.post<Article>(this._urlA, article, options);
  }

  getProducts(){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json');

    return this.httpClient.get(this._urlP,{
      headers: header
    });
  }

  createProduct(product: Product): Observable<Product>{
    let httpHeaders = new HttpHeaders({  'Content-Type' : 'application/json',  'Cache-Control': 'no-cache' });
    let options = {  headers: httpHeaders };
    return this.httpClient.post<Product>(this._urlP, product, options);
  }

}

