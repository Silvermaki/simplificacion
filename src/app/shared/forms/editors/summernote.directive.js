"use strict";
var core_1 = require("@angular/core");
var SummernoteDirective = (function () {
    function SummernoteDirective(el) {
        this.el = el;
        this.summernote = {};
        this.change = new core_1.EventEmitter();
    }
    SummernoteDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!summernote/dist/summernote.min.js').then(function () {
            _this.render();
        });
    };
    SummernoteDirective.prototype.render = function () {
        var _this = this;
        $(this.el.nativeElement).summernote(Object.assign(this.summernote, {
            tabsize: 2,
            callbacks: {
                onChange: function (we, contents, $editable) {
                    _this.change.emit(contents);
                }
            }
        }));
    };
    return SummernoteDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SummernoteDirective.prototype, "summernote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SummernoteDirective.prototype, "change", void 0);
SummernoteDirective = __decorate([
    core_1.Directive({
        selector: '[summernote]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SummernoteDirective);
exports.SummernoteDirective = SummernoteDirective;
//# sourceMappingURL=summernote.directive.js.map