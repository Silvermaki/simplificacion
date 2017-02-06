"use strict";
var core_1 = require("@angular/core");
var KnobDirective = (function () {
    function KnobDirective(el) {
        var _this = this;
        this.el = el;
        System.import('jquery-knob').then(function () {
            _this.render();
        });
    }
    KnobDirective.prototype.render = function () {
        $(this.el.nativeElement).knob(this.saKnob || {});
    };
    return KnobDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], KnobDirective.prototype, "saKnob", void 0);
KnobDirective = __decorate([
    core_1.Directive({
        selector: '[saKnob]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], KnobDirective);
exports.KnobDirective = KnobDirective;
//# sourceMappingURL=knob.directive.js.map