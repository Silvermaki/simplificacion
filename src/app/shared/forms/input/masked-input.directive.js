"use strict";
var core_1 = require("@angular/core");
var MaskedInput = (function () {
    function MaskedInput(el) {
        this.el = el;
    }
    MaskedInput.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!jquery.maskedinput/src/jquery.maskedinput.js').then(function () {
            var options = _this.saMaskedPlaceholder ? { placeholder: _this.saMaskedPlaceholder } : '';
            $(_this.el.nativeElement).mask(_this.saMaskedInput, options);
        });
    };
    return MaskedInput;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MaskedInput.prototype, "saMaskedInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MaskedInput.prototype, "saMaskedPlaceholder", void 0);
MaskedInput = __decorate([
    core_1.Directive({
        selector: '[saMaskedInput]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MaskedInput);
exports.MaskedInput = MaskedInput;
//# sourceMappingURL=masked-input.directive.js.map