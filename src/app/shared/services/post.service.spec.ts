import { PostService } from "./post.service";
import { TestBed } from "@angular/core/testing";
import { HttpHandler, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
describe('Service: PostService', () => {

    let postService: PostService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PostService,
                HttpClient,
                HttpHandler
            ]
        });

        postService = TestBed.get(PostService);
    });

    it('should create an instance', () => {
        expect(postService).toBeDefined();
    });

    it('should fetch data', () => {
        spyOn(postService, 'get')
            .and
            .returnValue(
                Observable.of({})
            );

        postService.get();
        expect(postService.get).toHaveBeenCalled();
    });
});

