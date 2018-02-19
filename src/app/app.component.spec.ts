import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PostService } from './shared/services/post.service';
import { TodoService } from './shared/services/todo.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tick } from '@angular/core/testing';
import { fakeAsync } from '@angular/core/testing';
import { TodoModel } from './shared/models/todo.model';
import { PostModel } from './shared/models/post.model';

describe('AppComponent', () => {
  let todoData: TodoModel[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }];
  let postData: PostModel[] =
    [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
      }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        TodoService,
        PostService,
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have counter initialized with 1`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.counter).toEqual(1);
  }));

  describe("Manually ticking the Jasmine Clock to check interval related code: ", function () {
    
    beforeEach(function () {
      jasmine.clock().install();
    });

    it("causes a timeout to be called synchronously which should increate counter variable by one", function () {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const todoServiceApi = fixture.debugElement.injector.get(TodoService);
      spyOn(todoServiceApi, 'get').and.returnValue(Observable.of(todoData));
      const postServiceApi = fixture.debugElement.injector.get(PostService);
      spyOn(postServiceApi, 'get').and.returnValue(Observable.of(postData));
      app.ngOnInit();
      expect(app.counter).toEqual(1);
      jasmine.clock().tick(20000);
      expect(app.counter).toEqual(2);
      jasmine.clock().tick(20000);
      expect(app.counter).toEqual(3);
    });
    afterEach(function () {
      jasmine.clock().uninstall();
    });
  });

  describe(' HTML related tests: ', () => {
    it('Table should have 3 header', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      const headerOfTable = compiled.querySelectorAll('th');
      expect(headerOfTable.length).toBe(3);
      expect(headerOfTable[0].textContent).toContain('ID');
      expect(headerOfTable[1].textContent).toContain('User Id');
      expect(headerOfTable[2].textContent).toContain('Title');
    }));

    it('Table should have 2 tbody', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      const headerOfTable = compiled.querySelectorAll('tbody');
      expect(headerOfTable.length).toBe(2);
    }));

  });
});
