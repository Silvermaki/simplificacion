"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var smartadmin_config_1 = require("../../shared/smartadmin.config");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/do");
var JsonApiService = (function () {
    function JsonApiService(http) {
        this.http = http;
    }
    JsonApiService.prototype.fetch = function (url) {
        return this.http.get(this.getBaseUrl() + smartadmin_config_1.config.API_URL + url)
            .delay(100)
            .map(this.extractData)
            .catch(this.handleError);
    };
    JsonApiService.prototype.getBaseUrl = function () {
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
    };
    JsonApiService.prototype.extractData = function (res) {
        var body = res.json();
        if (body) {
            return body.data || body;
        }
        else {
            return {};
        }
    };
    JsonApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    return JsonApiService;
}());
JsonApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JsonApiService);
exports.JsonApiService = JsonApiService;
//# sourceMappingURL=json-api.service.js.map