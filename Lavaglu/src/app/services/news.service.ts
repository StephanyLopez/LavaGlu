import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

import { Article, NewsResponse } from '../interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const apiKey =environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor (private http: HttpClient){ }

  getTopHeadLines(): Observable <Article[]> {
    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6705d39ccc9b4ab4bf819c473cf8794c',{
      params:{apiKey}
    }).pipe(
      map (({articles}) => articles)
    );
  }
}