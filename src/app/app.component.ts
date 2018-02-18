import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/services/todo.service';
import { TodoModel } from './shared/models/todo.model';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { PostService } from './shared/services/post.service';
import { PostModel } from './shared/models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private todoData: TodoModel;
  private postData: PostModel;
  private counter = 1;
  constructor(private todoService: TodoService,
    private postService: PostService
  ) {
  }

  ngOnInit() {
    // get our data immediately when the component inits
    this.todoService.get()
      .subscribe((data) => {
        this.todoData = data;
      });

    // get our data every subsequent 20 seconds
    IntervalObservable.create(20000)
      .subscribe(() => {
        if (this.counter % 2 == 0) {
          this.counter++;
          this.todoService.get()
            .subscribe(data => {
              this.todoData = data;
              this.postData = null;
            });
        } else {
          this.counter++;
          this.postService.get()
            .subscribe(data => {
              this.postData = data;
              this.todoData = null;
            });
        }

      });
  }
}