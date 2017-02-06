"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var profile_component_1 = require("./profile.component");
var routes = [{
        path: '',
        component: profile_component_1.ProfileComponent
    }];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], ProfileRoutingModule);
exports.ProfileRoutingModule = ProfileRoutingModule;
//# sourceMappingURL=profile-routing.module.js.map