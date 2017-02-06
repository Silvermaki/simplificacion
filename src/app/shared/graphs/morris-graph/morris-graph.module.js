"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var morris_graph_component_1 = require("./morris-graph.component");
var MorrisGraphModule = (function () {
    function MorrisGraphModule() {
    }
    return MorrisGraphModule;
}());
MorrisGraphModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [morris_graph_component_1.MorrisGraphComponent],
        exports: [morris_graph_component_1.MorrisGraphComponent],
    })
], MorrisGraphModule);
exports.MorrisGraphModule = MorrisGraphModule;
//# sourceMappingURL=morris-graph.module.js.map