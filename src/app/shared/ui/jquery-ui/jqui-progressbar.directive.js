"use strict";
var core_1 = require("@angular/core");
var JquiProgressbar = (function () {
    function JquiProgressbar(el) {
        this.el = el;
    }
    JquiProgressbar.prototype.ngOnInit = function () {
        $(this.el.nativeElement).progressbar(this.saJquiProgressbar || {});
    };
    return JquiProgressbar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JquiProgressbar.prototype, "saJquiProgressbar", void 0);
JquiProgressbar = __decorate([
    core_1.Directive({
        selector: '[saJquiProgressbar]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiProgressbar);
exports.JquiProgressbar = JquiProgressbar;
//# sourceMappingURL=jqui-progressbar.directive.js.map