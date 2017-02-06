"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vector_map_component_1 = require("./vector-map.component");
var VectorMapModule = (function () {
    function VectorMapModule() {
    }
    return VectorMapModule;
}());
VectorMapModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [vector_map_component_1.VectorMapComponent],
        exports: [vector_map_component_1.VectorMapComponent],
    })
], VectorMapModule);
exports.VectorMapModule = VectorMapModule;
//# sourceMappingURL=vector-map.module.js.map