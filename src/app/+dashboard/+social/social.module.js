"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var social_routing_module_1 = require("./social-routing.module");
var social_component_1 = require("./social.component");
var SocialModule = (function () {
    function SocialModule() {
    }
    return SocialModule;
}());
SocialModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            social_routing_module_1.SocialRoutingModule
        ],
        declarations: [social_component_1.SocialComponent]
    })
], SocialModule);
exports.SocialModule = SocialModule;
//# sourceMappingURL=social.module.js.map