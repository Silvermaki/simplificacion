"use strict";
var core_1 = require("@angular/core");
var directives_1 = require("@angular/core/src/metadata/directives");
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function (title) {
        if (!this.options.title) {
            title.html("&#160;");
        }
        else {
            title.html(this.options.title);
        }
    }
}));
var JquiDialog = (function () {
    function JquiDialog(el) {
        this.el = el;
    }
    JquiDialog.prototype.ngOnInit = function () {
        $(this.el.nativeElement).dialog(this.saJquiDialog);
    };
    return JquiDialog;
}());
__decorate([
    directives_1.Input(),
    __metadata("design:type", Object)
], JquiDialog.prototype, "saJquiDialog", void 0);
JquiDialog = __decorate([
    core_1.Directive({
        selector: '[saJquiDialog]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiDialog);
exports.JquiDialog = JquiDialog;
//# sourceMappingURL=jqui-dialog.directive.js.map