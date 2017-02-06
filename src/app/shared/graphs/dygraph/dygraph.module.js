"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dygraph_component_1 = require("./dygraph.component");
var DygraphModule = (function () {
    function DygraphModule() {
    }
    return DygraphModule;
}());
DygraphModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [dygraph_component_1.DygraphComponent],
        exports: [dygraph_component_1.DygraphComponent],
    })
], DygraphModule);
exports.DygraphModule = DygraphModule;
//# sourceMappingURL=dygraph.module.js.map