"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var blog_routing_module_1 = require("./blog-routing.module");
var blog_component_1 = require("./blog.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            blog_routing_module_1.BlogRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [blog_component_1.BlogComponent]
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map