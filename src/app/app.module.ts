import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostService } from './shared/services/post.service';
import { TodoService } from './shared/services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    PostService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
