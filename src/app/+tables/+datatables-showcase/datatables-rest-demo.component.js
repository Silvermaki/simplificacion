"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DatatablesRestDemoComponent = (function () {
    function DatatablesRestDemoComponent(http) {
        var _this = this;
        this.http = http;
        this.REST_ROOT = 'https://jsonplaceholder.typicode.com';
        this.options = {
            dom: "Bfrtip",
            ajax: function (data, callback, settings) {
                _this.http.get(_this.REST_ROOT + '/posts')
                    .map(_this.extractData)
                    .catch(_this.handleError)
                    .subscribe(function (data) {
                    console.log('data from rest endpoint', data);
                    callback({
                        aaData: data.slice(0, 100)
                    });
                });
            },
            columns: [
                { data: "userId" },
                { data: "id" },
                { data: "title" },
                { data: "body" },
            ]
        };
    }
    DatatablesRestDemoComponent.prototype.ngOnInit = function () { };
    DatatablesRestDemoComponent.prototype.extractData = function (res) {
        var body = res.json();
        if (body) {
            return body.data || body;
        }
        else {
            return {};
        }
    };
    DatatablesRestDemoComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    return DatatablesRestDemoComponent;
}());
DatatablesRestDemoComponent = __decorate([
    core_1.Component({
        selector: 'datatables-rest-demo',
        templateUrl: './datatables-rest-demo.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DatatablesRestDemoComponent);
exports.DatatablesRestDemoComponent = DatatablesRestDemoComponent;
//# sourceMappingURL=datatables-rest-demo.component.js.map