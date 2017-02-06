"use strict";
var core_1 = require("@angular/core");
var MarkdownEditorDirective = (function () {
    function MarkdownEditorDirective(el) {
        this.el = el;
    }
    MarkdownEditorDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('./markdown-editor.bundle').then(function () {
            _this.render();
        });
    };
    MarkdownEditorDirective.prototype.render = function () {
        $(this.el.nativeElement).markdown(this.markdownEditor || {});
    };
    return MarkdownEditorDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MarkdownEditorDirective.prototype, "markdownEditor", void 0);
MarkdownEditorDirective = __decorate([
    core_1.Directive({
        selector: '[markdownEditor]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MarkdownEditorDirective);
exports.MarkdownEditorDirective = MarkdownEditorDirective;
//node_modules/
//# sourceMappingURL=markdown-editor.directive.js.map