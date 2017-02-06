"use strict";
var core_1 = require("@angular/core");
var dom_helpers_1 = require("../../../utils/dom-helpers");
var Select2Directive = (function () {
    function Select2Directive(el) {
        this.el = el;
        dom_helpers_1.addClassName(this.el.nativeElement, ['sa-cloak', 'sa-hidden']);
    }
    Select2Directive.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!select2/dist/js/select2.min.js').then(function () {
            $(_this.el.nativeElement).select2();
            dom_helpers_1.removeClassName(_this.el.nativeElement, ['sa-hidden']);
        });
    };
    return Select2Directive;
}());
Select2Directive = __decorate([
    core_1.Directive({
        selector: '[select2]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Select2Directive);
exports.Select2Directive = Select2Directive;
//# sourceMappingURL=select2.directive.js.map