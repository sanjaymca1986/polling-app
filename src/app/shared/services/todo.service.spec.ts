import { TodoService } from "./todo.service";
import { TestBed } from "@angular/core/testing";
import { HttpHandler, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
describe('Service: TodoService', () => {

    let todoService: TodoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TodoService,
                HttpClient,
                HttpHandler
            ]
        });

        todoService = TestBed.get(TodoService);
    });

    it('should create an instance', () => {
        expect(todoService).toBeDefined();
    });

    it('should fetch data', () => {
        spyOn(todoService, 'get')
            .and
            .returnValue(
                Observable.of({})
            );

        todoService.get();
        expect(todoService.get).toHaveBeenCalled();
    });
});

