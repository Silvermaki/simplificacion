"use strict";
var core_1 = require("@angular/core");
var ProgressbarDirective = (function () {
    function ProgressbarDirective(el) {
        this.el = el;
    }
    ProgressbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('bootstrap-progressbar/bootstrap-progressbar.min.js').then(function () {
            $(_this.el.nativeElement).progressbar(_this.saProgressbar || {
                display_text: 'fill'
            });
        });
    };
    return ProgressbarDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProgressbarDirective.prototype, "saProgressbar", void 0);
ProgressbarDirective = __decorate([
    core_1.Directive({
        selector: '[saProgressbar]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ProgressbarDirective);
exports.ProgressbarDirective = ProgressbarDirective;
//# sourceMappingURL=progressbar.directive.js.map