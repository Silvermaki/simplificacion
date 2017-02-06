"use strict";
var core_1 = require("@angular/core");
var SmartClockpickerDirective = (function () {
    function SmartClockpickerDirective(el) {
        this.el = el;
    }
    SmartClockpickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!clockpicker/dist/bootstrap-clockpicker.min.js').then(function () {
            _this.render();
        });
    };
    SmartClockpickerDirective.prototype.render = function () {
        $(this.el.nativeElement).clockpicker(this.smartClockpicker || {
            placement: 'top',
            donetext: 'Done'
        });
    };
    return SmartClockpickerDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SmartClockpickerDirective.prototype, "smartClockpicker", void 0);
SmartClockpickerDirective = __decorate([
    core_1.Directive({
        selector: '[smartClockpicker]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SmartClockpickerDirective);
exports.SmartClockpickerDirective = SmartClockpickerDirective;
//# sourceMappingURL=smart-clockpicker.directive.js.map