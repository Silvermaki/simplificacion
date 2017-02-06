"use strict";
var core_1 = require("@angular/core");
var app_views_routing_1 = require("./app-views.routing");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var AppViewsModule = (function () {
    function AppViewsModule() {
    }
    return AppViewsModule;
}());
AppViewsModule = __decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            smartadmin_module_1.SmartadminModule,
            app_views_routing_1.routing,
        ],
        entryComponents: []
    })
], AppViewsModule);
exports.AppViewsModule = AppViewsModule;
//# sourceMappingURL=app-views.module.js.map