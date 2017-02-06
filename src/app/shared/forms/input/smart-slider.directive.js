"use strict";
var core_1 = require("@angular/core");
var SmartSliderDirective = (function () {
    function SmartSliderDirective(el) {
        this.el = el;
    }
    SmartSliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!bootstrap-slider/dist/bootstrap-slider.min.js').then(function () {
            _this.render();
        });
    };
    SmartSliderDirective.prototype.render = function () {
        $(this.el.nativeElement).bootstrapSlider();
    };
    return SmartSliderDirective;
}());
SmartSliderDirective = __decorate([
    core_1.Directive({
        selector: '[smartSlider]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SmartSliderDirective);
exports.SmartSliderDirective = SmartSliderDirective;
//# sourceMappingURL=smart-slider.directive.js.map