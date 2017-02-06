"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ckeditor_component_1 = require("./ckeditor.component");
var routes = [{
        path: '',
        component: ckeditor_component_1.CkeditorComponent
    }];
var CkeditorRoutingModule = (function () {
    function CkeditorRoutingModule() {
    }
    return CkeditorRoutingModule;
}());
CkeditorRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], CkeditorRoutingModule);
exports.CkeditorRoutingModule = CkeditorRoutingModule;
//# sourceMappingURL=ckeditor-routing.module.js.map