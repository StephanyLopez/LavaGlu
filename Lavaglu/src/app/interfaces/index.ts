// To parse this data:
//
//   import { Convert, NewsResponse } from "./file";
//
//   const newsResponse = Convert.toNewsResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface NewsResponse {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      null | string;
    title:       string;
    description?:string;
    url:         string;
    urlToImage?: string;
    publishedAt: Date;
    content:     null | string;
}

export interface Source {
    id?:  string;
    name: string;
}
