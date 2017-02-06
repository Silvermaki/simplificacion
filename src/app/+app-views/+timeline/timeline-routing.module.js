"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var timeline_component_1 = require("./timeline.component");
var routes = [{
        path: '',
        component: timeline_component_1.TimelineComponent
    }];
var TimelineRoutingModule = (function () {
    function TimelineRoutingModule() {
    }
    return TimelineRoutingModule;
}());
TimelineRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], TimelineRoutingModule);
exports.TimelineRoutingModule = TimelineRoutingModule;
//# sourceMappingURL=timeline-routing.module.js.map