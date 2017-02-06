"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var blog_component_1 = require("./blog.component");
var routes = [{
        path: '',
        component: blog_component_1.BlogComponent
    }];
var BlogRoutingModule = (function () {
    function BlogRoutingModule() {
    }
    return BlogRoutingModule;
}());
BlogRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], BlogRoutingModule);
exports.BlogRoutingModule = BlogRoutingModule;
//# sourceMappingURL=blog-routing.module.js.map