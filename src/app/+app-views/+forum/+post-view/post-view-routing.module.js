"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var post_view_component_1 = require("./post-view.component");
var routes = [{
        path: '',
        component: post_view_component_1.PostViewComponent
    }];
var PostViewRoutingModule = (function () {
    function PostViewRoutingModule() {
    }
    return PostViewRoutingModule;
}());
PostViewRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], PostViewRoutingModule);
exports.PostViewRoutingModule = PostViewRoutingModule;
//# sourceMappingURL=post-view-routing.module.js.map