import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonasService {

	constructor(private http: Http) {}

  	private baseUrl: string = "http://localhost:8000";

   getCountries(load: any):Observable<any>{
    let bodyString = JSON.stringify(load);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl+"/countries",bodyString, options).map(this.extractData).catch(this.handleError);
    }
    getPersons(load: any):Observable<any>{
		let bodyString = JSON.stringify(load);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/getpersons",bodyString, options).map(this.extractData).catch(this.handleError);
	}

	addPerson(load: any):Observable<any>{
		let bodyString = JSON.stringify(load);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/addperson",bodyString, options).map(this.extractData).catch(this.handleError);
	}

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res:Response) {
        let body = res.json();

        return body || [];
    }
}
