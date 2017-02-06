"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var post_view_routing_module_1 = require("./post-view-routing.module");
var post_view_component_1 = require("./post-view.component");
var layout_module_1 = require("../../../shared/layout/layout.module");
var stats_module_1 = require("../../../shared/stats/stats.module");
var PostViewModule = (function () {
    function PostViewModule() {
    }
    return PostViewModule;
}());
PostViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            post_view_routing_module_1.PostViewRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [post_view_component_1.PostViewComponent]
    })
], PostViewModule);
exports.PostViewModule = PostViewModule;
//# sourceMappingURL=post-view.module.js.map