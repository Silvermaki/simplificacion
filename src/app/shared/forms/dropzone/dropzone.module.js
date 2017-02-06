"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dropzone_directive_1 = require("./dropzone.directive");
var DropzoneModule = (function () {
    function DropzoneModule() {
    }
    return DropzoneModule;
}());
DropzoneModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [dropzone_directive_1.DropzoneDirective],
        exports: [dropzone_directive_1.DropzoneDirective],
    })
], DropzoneModule);
exports.DropzoneModule = DropzoneModule;
//# sourceMappingURL=dropzone.module.js.map