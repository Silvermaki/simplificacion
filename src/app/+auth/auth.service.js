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
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8000";
    }
    AuthService.prototype.registerUser = function (user) {
        var bodyString = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/register", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    AuthService.prototype.login = function (login_details) {
        var bodyString = JSON.stringify(login_details);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/login", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    AuthService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map