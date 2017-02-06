"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var d3_map_component_1 = require("./d3-map.component");
var D3Module = (function () {
    function D3Module() {
    }
    return D3Module;
}());
D3Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [d3_map_component_1.D3MapComponent],
        exports: [d3_map_component_1.D3MapComponent],
    })
], D3Module);
exports.D3Module = D3Module;
//# sourceMappingURL=d3.module.js.map