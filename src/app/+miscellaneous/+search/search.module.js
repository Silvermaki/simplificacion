"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var search_routing_module_1 = require("./search-routing.module");
var search_component_1 = require("./search.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            search_routing_module_1.SearchRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [search_component_1.SearchComponent]
    })
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map