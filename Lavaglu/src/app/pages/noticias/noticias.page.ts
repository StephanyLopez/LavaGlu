import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsService } from 'src/app/services/news.service';
import {Article} from '../../interfaces';

const apiKey =environment.apiKey

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  public articles: Article [] = []

  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.newService.getTopHeadLines()
      .subscribe(articles => this.articles.push( ...articles));
  }

}
