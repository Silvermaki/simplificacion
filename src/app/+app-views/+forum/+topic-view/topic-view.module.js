"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var topic_view_routing_module_1 = require("./topic-view-routing.module");
var topic_view_component_1 = require("./topic-view.component");
var layout_module_1 = require("../../../shared/layout/layout.module");
var stats_module_1 = require("../../../shared/stats/stats.module");
var TopicViewModule = (function () {
    function TopicViewModule() {
    }
    return TopicViewModule;
}());
TopicViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            topic_view_routing_module_1.TopicViewRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [topic_view_component_1.TopicViewComponent]
    })
], TopicViewModule);
exports.TopicViewModule = TopicViewModule;
//# sourceMappingURL=topic-view.module.js.map