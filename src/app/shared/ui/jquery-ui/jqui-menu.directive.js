"use strict";
var core_1 = require("@angular/core");
var JquiMenu = (function () {
    function JquiMenu(el) {
        this.el = el;
    }
    JquiMenu.prototype.ngOnInit = function () {
        $(this.el.nativeElement).menu(this.saJquiMenu || {});
    };
    return JquiMenu;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JquiMenu.prototype, "saJquiMenu", void 0);
JquiMenu = __decorate([
    core_1.Directive({
        selector: '[saJquiMenu]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiMenu);
exports.JquiMenu = JquiMenu;
//# sourceMappingURL=jqui-menu.directive.js.map