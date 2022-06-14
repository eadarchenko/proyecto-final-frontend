import { Component, Input, OnInit } from '@angular/core';
import { articles, artig } from 'src/mock-articulos';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public  article : Article [] = articles ;

  public articulosg :Article [] = artig;

  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

}


