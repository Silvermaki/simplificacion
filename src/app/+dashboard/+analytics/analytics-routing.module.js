"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var analytics_component_1 = require("./analytics.component");
var routes = [{
        path: '',
        component: analytics_component_1.AnalyticsComponent,
        data: { pageTitle: 'Analytics' }
    }];
var AnalyticsRoutingModule = (function () {
    function AnalyticsRoutingModule() {
    }
    return AnalyticsRoutingModule;
}());
AnalyticsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], AnalyticsRoutingModule);
exports.AnalyticsRoutingModule = AnalyticsRoutingModule;
//# sourceMappingURL=analytics-routing.module.js.map