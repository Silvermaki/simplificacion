"use strict";
var core_1 = require("@angular/core");
var JquiAutocomplete = (function () {
    function JquiAutocomplete(el) {
        this.el = el;
    }
    JquiAutocomplete.prototype.ngOnInit = function () {
        $(this.el.nativeElement).autocomplete(this.saJquiAutocomplete || {});
    };
    return JquiAutocomplete;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JquiAutocomplete.prototype, "saJquiAutocomplete", void 0);
JquiAutocomplete = __decorate([
    core_1.Directive({
        selector: '[saJquiAutocomplete]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiAutocomplete);
exports.JquiAutocomplete = JquiAutocomplete;
//# sourceMappingURL=jqui-autocomplete.directive.js.map