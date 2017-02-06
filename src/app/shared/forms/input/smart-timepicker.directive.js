"use strict";
var core_1 = require("@angular/core");
var SmartTimepickerDirective = (function () {
    function SmartTimepickerDirective(el) {
        this.el = el;
    }
    SmartTimepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!bootstrap-timepicker/js/bootstrap-timepicker.min.js').then(function () {
            _this.render();
        });
    };
    SmartTimepickerDirective.prototype.render = function () {
        $(this.el.nativeElement).timepicker();
    };
    return SmartTimepickerDirective;
}());
SmartTimepickerDirective = __decorate([
    core_1.Directive({
        selector: '[smartTimepicker]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SmartTimepickerDirective);
exports.SmartTimepickerDirective = SmartTimepickerDirective;
//# sourceMappingURL=smart-timepicker.directive.js.map