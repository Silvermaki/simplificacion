"use strict";
var core_1 = require("@angular/core");
var ColorpickerDirective = (function () {
    function ColorpickerDirective(el) {
        this.el = el;
    }
    ColorpickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js').then(function () {
            _this.render();
        });
    };
    ColorpickerDirective.prototype.render = function () {
        $(this.el.nativeElement).colorpicker(this.saColorpicker || {});
    };
    return ColorpickerDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ColorpickerDirective.prototype, "saColorpicker", void 0);
ColorpickerDirective = __decorate([
    core_1.Directive({
        selector: '[saColorpicker]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ColorpickerDirective);
exports.ColorpickerDirective = ColorpickerDirective;
//# sourceMappingURL=colorpicker.directive.js.map