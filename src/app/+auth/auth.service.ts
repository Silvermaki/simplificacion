import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.interface';
import { Login } from './login.interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

	constructor(private http: Http) {}

  	private baseUrl: string = "http://localhost:8000";

	registerUser(user: User):Observable<any>{
		let bodyString = JSON.stringify(user);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/register",bodyString, options).map(this.extractData).catch(this.handleError);
	}

	login(login_details: Login):Observable<any>{
		let bodyString = JSON.stringify(login_details);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/login",bodyString, options).map(this.extractData).catch(this.handleError);
	}

	private extractData(res:Response) {
        let body = res.json();

        return body || [];
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
