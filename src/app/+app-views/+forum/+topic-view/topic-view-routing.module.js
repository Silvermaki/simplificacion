"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var topic_view_component_1 = require("./topic-view.component");
var routes = [{
        path: '',
        component: topic_view_component_1.TopicViewComponent
    }];
var TopicViewRoutingModule = (function () {
    function TopicViewRoutingModule() {
    }
    return TopicViewRoutingModule;
}());
TopicViewRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], TopicViewRoutingModule);
exports.TopicViewRoutingModule = TopicViewRoutingModule;
//# sourceMappingURL=topic-view-routing.module.js.map