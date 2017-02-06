"use strict";
var core_1 = require("@angular/core");
var IonSliderDirective = (function () {
    function IonSliderDirective(el) {
        this.el = el;
    }
    IonSliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!ion-rangeslider/js/ion.rangeSlider.min.js').then(function () {
            _this.render();
        });
    };
    IonSliderDirective.prototype.render = function () {
        $(this.el.nativeElement).ionRangeSlider();
    };
    return IonSliderDirective;
}());
IonSliderDirective = __decorate([
    core_1.Directive({
        selector: '[ionSlider]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], IonSliderDirective);
exports.IonSliderDirective = IonSliderDirective;
//# sourceMappingURL=ionslider.directive.js.map