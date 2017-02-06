"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var gallery_demo_component_1 = require("./gallery-demo.component");
var routes = [{
        path: '',
        component: gallery_demo_component_1.GalleryDemoComponent
    }];
var GalleryDemoRoutingModule = (function () {
    function GalleryDemoRoutingModule() {
    }
    return GalleryDemoRoutingModule;
}());
GalleryDemoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], GalleryDemoRoutingModule);
exports.GalleryDemoRoutingModule = GalleryDemoRoutingModule;
//# sourceMappingURL=gallery-demo-routing.module.js.map