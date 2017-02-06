"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RouteBreadcrumbsComponent = (function () {
    function RouteBreadcrumbsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.items = [];
    }
    RouteBreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (e) { return e instanceof router_1.NavigationEnd; })
            .subscribe(function (v) {
            _this.items = [];
            _this.extract(_this.router.routerState.root);
        });
    };
    RouteBreadcrumbsComponent.prototype.extract = function (route) {
        var _this = this;
        var pageTitle = route.data.value['pageTitle'];
        if (pageTitle && this.items.indexOf(pageTitle) == -1) {
            this.items.push(route.data.value['pageTitle']);
        }
        if (route.children) {
            route.children.forEach(function (it) {
                _this.extract(it);
            });
        }
    };
    return RouteBreadcrumbsComponent;
}());
RouteBreadcrumbsComponent = __decorate([
    core_1.Component({
        selector: 'sa-route-breadcrumbs',
        template: "\n        <ol class=\"breadcrumb\">\n           <li *ngFor=\"let item of items\">{{item}}</li>\n        </ol>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], RouteBreadcrumbsComponent);
exports.RouteBreadcrumbsComponent = RouteBreadcrumbsComponent;
//# sourceMappingURL=route-breadcrumbs.component.js.map