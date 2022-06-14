import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Article } from '../../interfaces/article';
import { ApiService } from '../../services/api.service';
import { articles } from '../../../mock-articulos';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articles: Article[] = [];

  constructor(public service: AdminService) {
    this.service.getArticles().subscribe((resp: any) => {
      console.log(resp);
      this.articles = resp.data
    })
  }

  ngOnInit(): void { }


}
