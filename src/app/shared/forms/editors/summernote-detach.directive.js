"use strict";
var core_1 = require("@angular/core");
var SummernoteDetachDirective = (function () {
    function SummernoteDetachDirective() {
    }
    SummernoteDetachDirective.prototype.render = function () {
        $(this.summernoteDetach).summernote('destroy');
    };
    return SummernoteDetachDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SummernoteDetachDirective.prototype, "summernoteDetach", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SummernoteDetachDirective.prototype, "render", null);
SummernoteDetachDirective = __decorate([
    core_1.Directive({
        selector: '[summernoteDetach]'
    }),
    __metadata("design:paramtypes", [])
], SummernoteDetachDirective);
exports.SummernoteDetachDirective = SummernoteDetachDirective;
//# sourceMappingURL=summernote-detach.directive.js.map