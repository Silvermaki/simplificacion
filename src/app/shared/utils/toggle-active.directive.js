"use strict";
var core_1 = require("@angular/core");
var ToggleActiveDirective = (function () {
    function ToggleActiveDirective() {
    }
    return ToggleActiveDirective;
}());
__decorate([
    core_1.HostBinding('class.active'), core_1.Input(),
    __metadata("design:type", Object)
], ToggleActiveDirective.prototype, "saToggleActive", void 0);
ToggleActiveDirective = __decorate([
    core_1.Directive({
        selector: '[saToggleActive]'
    }),
    __metadata("design:paramtypes", [])
], ToggleActiveDirective);
exports.ToggleActiveDirective = ToggleActiveDirective;
//# sourceMappingURL=toggle-active.directive.js.map