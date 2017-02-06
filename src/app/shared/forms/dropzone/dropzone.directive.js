"use strict";
var core_1 = require("@angular/core");
var DropzoneDirective = (function () {
    function DropzoneDirective(el) {
        var _this = this;
        this.el = el;
        System.import('dropzone').then(function (Dropzone) {
            _this.initDropzone(Dropzone);
        });
    }
    DropzoneDirective.prototype.initDropzone = function (Dropzone) {
        Dropzone.autoDiscover = false;
        this.dropzone = new Dropzone(this.el.nativeElement, this.saDropzone || {});
    };
    return DropzoneDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropzoneDirective.prototype, "saDropzone", void 0);
DropzoneDirective = __decorate([
    core_1.Directive({
        selector: '[saDropzone]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DropzoneDirective);
exports.DropzoneDirective = DropzoneDirective;
//# sourceMappingURL=dropzone.directive.js.map