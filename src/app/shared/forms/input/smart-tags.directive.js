"use strict";
var core_1 = require("@angular/core");
var SmartTagsDirective = (function () {
    function SmartTagsDirective(el) {
        this.el = el;
    }
    SmartTagsDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js').then(function () {
            _this.render();
        });
    };
    SmartTagsDirective.prototype.render = function () {
        $(this.el.nativeElement).tagsinput();
    };
    return SmartTagsDirective;
}());
SmartTagsDirective = __decorate([
    core_1.Directive({
        selector: '[smartTags]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SmartTagsDirective);
exports.SmartTagsDirective = SmartTagsDirective;
//# sourceMappingURL=smart-tags.directive.js.map