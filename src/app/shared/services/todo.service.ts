import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoModel } from '../models/todo.model';

@Injectable()
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos'; // full uri of the service to consume here

  constructor(private http: HttpClient) { }

  get(): Observable<TodoModel>{
    return this.http
      .get<TodoModel>(this.url);
  }
}