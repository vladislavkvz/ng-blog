import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostsService {
	
	postsURL = "https://jsonplaceholder.typicode.com/posts";

	constructor(private http: Http) { }
	
	public listPosts(): Promise<Post[]> {
		return this.http.get(this.postsURL)
				   .toPromise().then(response => response.json());
	}
}