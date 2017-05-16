import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UsersService {

	usersURL = "https://jsonplaceholder.typicode.com/users";

	constructor(private http: Http) { }

  	public listUsers(): Promise<User[]> {
		return this.http.get(this.usersURL)
				   .toPromise().then(response => response.json()); 
    }
}