"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var PersonasService = (function () {
    function PersonasService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8000";
    }
    PersonasService.prototype.getCountries = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/countries", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    PersonasService.prototype.getPersons = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/getpersons", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    PersonasService.prototype.addPerson = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/addperson", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    PersonasService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    PersonasService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    return PersonasService;
}());
PersonasService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PersonasService);
exports.PersonasService = PersonasService;
//# sourceMappingURL=personas.service.js.map