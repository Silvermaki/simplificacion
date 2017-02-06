"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var social_component_1 = require("./social.component");
var routes = [{
        path: '',
        component: social_component_1.SocialComponent,
        data: { pageTitle: 'Social' }
    }];
var SocialRoutingModule = (function () {
    function SocialRoutingModule() {
    }
    return SocialRoutingModule;
}());
SocialRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], SocialRoutingModule);
exports.SocialRoutingModule = SocialRoutingModule;
//# sourceMappingURL=social-routing.module.js.map