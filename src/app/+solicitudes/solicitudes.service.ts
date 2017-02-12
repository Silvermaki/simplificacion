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
export class SolicitudesService {

	constructor(private http: Http) {}

  	private baseUrl: string = "http://localhost:8000";


    getProcesses(load: any):Observable<any>{
		let bodyString = JSON.stringify(load);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/processes",bodyString, options).map(this.extractData).catch(this.handleError);
	}

	getSections(load: any):Observable<any>{
		let bodyString = JSON.stringify(load);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/sections",bodyString, options).map(this.extractData).catch(this.handleError);
	}

	getTasks(load: any):Observable<any>{
		let bodyString = JSON.stringify(load);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/tasks",bodyString, options).map(this.extractData).catch(this.handleError);
	}

	getForms(load: any):Observable<any>{
		let bodyString = JSON.stringify(load);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/forms",bodyString, options).map(this.extractData).catch(this.handleError);
	}

	getFields(load: any):Observable<any>{
		let bodyString = JSON.stringify(load);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"/fields",bodyString, options).map(this.extractData).catch(this.handleError);
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
