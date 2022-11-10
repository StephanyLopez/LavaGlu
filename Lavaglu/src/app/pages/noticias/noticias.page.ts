import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsService } from 'src/app/services/news.service';

const apiKey =environment.apiKey

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.newService.getTopHeadLines().subscribe(resp =>{
      console.log(resp);
    });
  }

}
