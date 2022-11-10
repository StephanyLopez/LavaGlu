import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor (private http: HttpClient){}
  getTopHeadLines(){//trae datos con el método
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6705d39ccc9b4ab4bf819c473cf8794c');
  }
}
