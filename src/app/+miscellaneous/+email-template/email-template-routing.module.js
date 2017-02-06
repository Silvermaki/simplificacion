"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var email_template_component_1 = require("./email-template.component");
var routes = [{
        path: '',
        component: email_template_component_1.EmailTemplateComponent
    }];
var EmailTemplateRoutingModule = (function () {
    function EmailTemplateRoutingModule() {
    }
    return EmailTemplateRoutingModule;
}());
EmailTemplateRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], EmailTemplateRoutingModule);
exports.EmailTemplateRoutingModule = EmailTemplateRoutingModule;
//# sourceMappingURL=email-template-routing.module.js.map