"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var select2_directive_1 = require("./select2.directive");
var Select2Module = (function () {
    function Select2Module() {
    }
    return Select2Module;
}());
Select2Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [select2_directive_1.Select2Directive],
        exports: [select2_directive_1.Select2Directive],
    })
], Select2Module);
exports.Select2Module = Select2Module;
//# sourceMappingURL=select2.module.js.map