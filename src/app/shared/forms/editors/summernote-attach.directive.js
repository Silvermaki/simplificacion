"use strict";
var core_1 = require("@angular/core");
var SummernoteAttachDirective = (function () {
    function SummernoteAttachDirective() {
    }
    SummernoteAttachDirective.prototype.render = function () {
        $(this.summernoteAttach).summernote({
            focus: true
        });
    };
    SummernoteAttachDirective.prototype.ngOnInit = function () {
        System.import('script-loader!summernote/dist/summernote.min.js');
    };
    return SummernoteAttachDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SummernoteAttachDirective.prototype, "summernoteAttach", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SummernoteAttachDirective.prototype, "render", null);
SummernoteAttachDirective = __decorate([
    core_1.Directive({
        selector: '[summernoteAttach]'
    }),
    __metadata("design:paramtypes", [])
], SummernoteAttachDirective);
exports.SummernoteAttachDirective = SummernoteAttachDirective;
//# sourceMappingURL=summernote-attach.directive.js.map