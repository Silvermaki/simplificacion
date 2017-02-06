"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var invoice_routing_module_1 = require("./invoice-routing.module");
var invoice_component_1 = require("./invoice.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var smartadmin_widgets_module_1 = require("../../shared/widgets/smartadmin-widgets.module");
var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    return InvoiceModule;
}());
InvoiceModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            invoice_routing_module_1.InvoiceRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
            smartadmin_widgets_module_1.SmartadminWidgetsModule,
        ],
        declarations: [invoice_component_1.InvoiceComponent]
    })
], InvoiceModule);
exports.InvoiceModule = InvoiceModule;
//# sourceMappingURL=invoice.module.js.map