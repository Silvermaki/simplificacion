"use strict";
var core_1 = require("@angular/core");
var JquiSlider = (function () {
    function JquiSlider(el) {
        this.el = el;
    }
    JquiSlider.prototype.ngOnInit = function () {
        $(this.el.nativeElement).slider(this.saJquiSlider || {});
    };
    return JquiSlider;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JquiSlider.prototype, "saJquiSlider", void 0);
JquiSlider = __decorate([
    core_1.Directive({
        selector: '[saJquiSlider]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiSlider);
exports.JquiSlider = JquiSlider;
//# sourceMappingURL=jqui-slider.directive.js.map