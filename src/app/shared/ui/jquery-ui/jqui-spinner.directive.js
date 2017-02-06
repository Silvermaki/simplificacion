"use strict";
var core_1 = require("@angular/core");
var JquiSpinner = (function () {
    function JquiSpinner(el) {
        this.el = el;
    }
    JquiSpinner.prototype.ngOnInit = function () {
        $(this.el.nativeElement).spinner(this.saJquiSpinner || {});
    };
    return JquiSpinner;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JquiSpinner.prototype, "saJquiSpinner", void 0);
JquiSpinner = __decorate([
    core_1.Directive({
        selector: '[saJquiSpinner]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiSpinner);
exports.JquiSpinner = JquiSpinner;
//# sourceMappingURL=jqui-spinner.directive.js.map