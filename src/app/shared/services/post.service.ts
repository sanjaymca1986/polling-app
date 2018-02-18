import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { PostModel } from '../models/post.model';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'; // full uri of the service to consume here

  constructor(private http: HttpClient) { }

  get(): Observable<PostModel>{
    return this.http
      .get<PostModel>(this.url);
  }
}