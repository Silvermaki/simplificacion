"use strict";
var core_1 = require("@angular/core");
var UiSpinner = (function () {
    function UiSpinner(el) {
        this.el = el;
    }
    UiSpinner.prototype.ngOnInit = function () {
        var options;
        if (this.saUiSpinner == 'decimal') {
            options = {
                step: 0.01,
                numberFormat: "n"
            };
        }
        else if (this.saUiSpinner == 'currency') {
            options = {
                min: 5,
                max: 2500,
                step: 25,
                start: 1000,
                numberFormat: "C"
            };
        }
        $(this.el.nativeElement).spinner((options || this.saUiSpinner) || {});
    };
    return UiSpinner;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UiSpinner.prototype, "saUiSpinner", void 0);
UiSpinner = __decorate([
    core_1.Directive({
        selector: '[saUiSpinner]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], UiSpinner);
exports.UiSpinner = UiSpinner;
//# sourceMappingURL=ui-spinner.directive.js.map