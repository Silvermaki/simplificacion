"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var progressbar_directive_1 = require("./progressbar.directive");
var SmartProgressbarModule = (function () {
    function SmartProgressbarModule() {
    }
    return SmartProgressbarModule;
}());
SmartProgressbarModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [progressbar_directive_1.ProgressbarDirective],
        exports: [progressbar_directive_1.ProgressbarDirective],
    })
], SmartProgressbarModule);
exports.SmartProgressbarModule = SmartProgressbarModule;
//# sourceMappingURL=smart-progressbar.module.js.map