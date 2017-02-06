"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var invoice_component_1 = require("./invoice.component");
var routes = [{
        path: '',
        component: invoice_component_1.InvoiceComponent
    }];
var InvoiceRoutingModule = (function () {
    function InvoiceRoutingModule() {
    }
    return InvoiceRoutingModule;
}());
InvoiceRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], InvoiceRoutingModule);
exports.InvoiceRoutingModule = InvoiceRoutingModule;
//# sourceMappingURL=invoice-routing.module.js.map