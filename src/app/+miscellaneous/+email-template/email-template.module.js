"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var email_template_routing_module_1 = require("./email-template-routing.module");
var email_template_component_1 = require("./email-template.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var EmailTemplateModule = (function () {
    function EmailTemplateModule() {
    }
    return EmailTemplateModule;
}());
EmailTemplateModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            email_template_routing_module_1.EmailTemplateRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [email_template_component_1.EmailTemplateComponent]
    })
], EmailTemplateModule);
exports.EmailTemplateModule = EmailTemplateModule;
//# sourceMappingURL=email-template.module.js.map