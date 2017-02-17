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
var SolicitudesService = (function () {
    function SolicitudesService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8000";
    }
    SolicitudesService.prototype.getCatalogues = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/getcatalogues", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    SolicitudesService.prototype.getProcesses = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/processes", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    SolicitudesService.prototype.getSections = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/sections", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    SolicitudesService.prototype.getTasks = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/tasks", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    SolicitudesService.prototype.getForms = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/forms", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    SolicitudesService.prototype.getFields = function (load) {
        var bodyString = JSON.stringify(load);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/fields", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    SolicitudesService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    SolicitudesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    return SolicitudesService;
}());
SolicitudesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SolicitudesService);
exports.SolicitudesService = SolicitudesService;
//# sourceMappingURL=solicitudes.service.js.map