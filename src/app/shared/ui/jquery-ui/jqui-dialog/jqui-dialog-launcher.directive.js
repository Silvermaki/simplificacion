"use strict";
var core_1 = require("@angular/core");
var directives_1 = require("@angular/core/src/metadata/directives");
/*$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
  _title: function (title) {
    if (!this.options.title) {
      title.html("&#160;");
    } else {
      title.html(this.options.title);
    }
  }
}));*/
var JquiDialogLauncher = (function () {
    function JquiDialogLauncher(el) {
        this.el = el;
    }
    JquiDialogLauncher.prototype.onClick = function (e) {
        $(this.saJquiDialogLauncher).dialog("open");
    };
    return JquiDialogLauncher;
}());
__decorate([
    directives_1.Input(),
    __metadata("design:type", Object)
], JquiDialogLauncher.prototype, "saJquiDialogLauncher", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JquiDialogLauncher.prototype, "onClick", null);
JquiDialogLauncher = __decorate([
    core_1.Directive({
        selector: '[saJquiDialogLauncher]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiDialogLauncher);
exports.JquiDialogLauncher = JquiDialogLauncher;
//# sourceMappingURL=jqui-dialog-launcher.directive.js.map