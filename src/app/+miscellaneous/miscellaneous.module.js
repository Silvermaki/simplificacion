"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var miscellaneous_routing_1 = require("./miscellaneous.routing");
var MiscellaneousModule = (function () {
    function MiscellaneousModule() {
    }
    return MiscellaneousModule;
}());
MiscellaneousModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            miscellaneous_routing_1.routing,
        ],
        declarations: []
    })
], MiscellaneousModule);
exports.MiscellaneousModule = MiscellaneousModule;
//# sourceMappingURL=miscellaneous.module.js.map