"use strict";
var core_1 = require("@angular/core");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var analytics_routing_module_1 = require("./analytics-routing.module");
var analytics_component_1 = require("./analytics.component");
var social_network_component_1 = require("./live-feeds/social-network.component");
var live_feeds_component_1 = require("./live-feeds/live-feeds.component");
var live_stats_component_1 = require("./live-feeds/live-stats.component");
var revenue_component_1 = require("./live-feeds/revenue.component");
var bird_eye_component_1 = require("./bird-eye/bird-eye.component");
var calendar_module_1 = require("../../+calendar/calendar.module");
var todo_widget_component_1 = require("./todo-widget/todo-widget.component");
var todo_list_component_1 = require("./todo-widget/todo-list.component");
var flot_chart_module_1 = require("../../shared/graphs/flot-chart/flot-chart.module");
var d3_module_1 = require("../../shared/graphs/d3/d3.module");
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    return AnalyticsModule;
}());
AnalyticsModule = __decorate([
    core_1.NgModule({
        imports: [
            smartadmin_module_1.SmartadminModule,
            analytics_routing_module_1.AnalyticsRoutingModule,
            calendar_module_1.CalendarModule,
            flot_chart_module_1.FlotChartModule,
            d3_module_1.D3Module,
        ],
        declarations: [
            analytics_component_1.AnalyticsComponent,
            live_feeds_component_1.LiveFeedsComponent,
            live_stats_component_1.LiveStatsComponent,
            revenue_component_1.RevenueComponent,
            social_network_component_1.SocialNetworkComponent,
            bird_eye_component_1.BirdEyeComponent,
            todo_widget_component_1.TodoWidgetComponent,
            todo_list_component_1.TodoListComponent
        ],
        providers: [],
    })
], AnalyticsModule);
exports.AnalyticsModule = AnalyticsModule;
//# sourceMappingURL=analytics.module.js.map