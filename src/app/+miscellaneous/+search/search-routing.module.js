"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var search_component_1 = require("./search.component");
var routes = [{
        path: '',
        component: search_component_1.SearchComponent
    }];
var SearchRoutingModule = (function () {
    function SearchRoutingModule() {
    }
    return SearchRoutingModule;
}());
SearchRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], SearchRoutingModule);
exports.SearchRoutingModule = SearchRoutingModule;
//# sourceMappingURL=search-routing.module.js.map