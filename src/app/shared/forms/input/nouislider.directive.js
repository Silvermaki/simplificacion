"use strict";
var core_1 = require("@angular/core");
var NouisliderDirective = (function () {
    function NouisliderDirective(el) {
        this.el = el;
        this.change = new core_1.EventEmitter();
    }
    NouisliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('nouislider/distribute/nouislider.min.js').then(function (noUiSlider) {
            var slider = _this.el.nativeElement;
            var options = _this.nouiSlider || {
                range: {
                    min: 0,
                    max: 1000
                },
            };
            noUiSlider.create(slider, options);
            slider.noUiSlider.on('change', function () {
                _this.change.emit(slider.noUiSlider.get());
            });
        });
    };
    return NouisliderDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NouisliderDirective.prototype, "nouiSlider", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NouisliderDirective.prototype, "change", void 0);
NouisliderDirective = __decorate([
    core_1.Directive({
        selector: '[nouiSlider]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NouisliderDirective);
exports.NouisliderDirective = NouisliderDirective;
//# sourceMappingURL=nouislider.directive.js.map