"use strict";
var core_1 = require("@angular/core");
var JquiTabs = (function () {
    function JquiTabs(el) {
        this.el = el;
    }
    JquiTabs.prototype.ngOnInit = function () {
        $('ul a', this.el.nativeElement).each(function (idx, el) {
            var href = $(el).attr("href"), newHref = window.location.protocol + "//" + window.location.hostname
                + (window.location.port ? ":" + window.location.port : "") +
                window.location.pathname + href;
            if (href.indexOf("#") == 0) {
                $(el).attr("href", newHref);
            }
        });
        $(this.el.nativeElement).tabs(this.saJquiTabs || {});
    };
    return JquiTabs;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JquiTabs.prototype, "saJquiTabs", void 0);
JquiTabs = __decorate([
    core_1.Directive({
        selector: '[saJquiTabs]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JquiTabs);
exports.JquiTabs = JquiTabs;
//# sourceMappingURL=jqui-tabs.directive.js.map