"use strict";
var core_1 = require("@angular/core");
var JquiAccordion = (function () {
    function JquiAccordion(el) {
        this.el = el;
    }
    JquiAccordion.prototype.ngOnInit = function () {
        var options = Object.assign({
            autoHeight: false,
            heightStyle: "content",
            collapsible: true,
            animate: 300,
            icons: {
                header: "fa fa-plus",
                activeHeader: "fa fa-minus" // custom icon class
            },
            header: "h4"
        }, (this.saJquiAccordion || {}));
        $(this.el.nativeElement).accordion(options);
    };
    return JquiAccordion;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JquiAccordion.prototype, "saJquiAccordion", void 0);
JquiAccordion = __decorate([
    core_1.Directive({
        selector: '[saJquiAccordion]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiAccordion);
exports.JquiAccordion = JquiAccordion;
//# sourceMappingURL=jqui-accordion.directive.js.map