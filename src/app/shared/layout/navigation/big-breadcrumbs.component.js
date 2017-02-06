"use strict";
var core_1 = require("@angular/core");
var BigBreadcrumbsComponent = (function () {
    function BigBreadcrumbsComponent() {
    }
    BigBreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    return BigBreadcrumbsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BigBreadcrumbsComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BigBreadcrumbsComponent.prototype, "items", void 0);
BigBreadcrumbsComponent = __decorate([
    core_1.Component({
        selector: 'sa-big-breadcrumbs',
        template: "\n   <div><h1 class=\"page-title txt-color-blueDark\">\n   <i class=\"fa-fw fa fa-{{icon}}\"></i>{{items[0]}}\n   <span *ngFor=\"let item of items.slice(1)\">> {{item}}</span>\n</h1></div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], BigBreadcrumbsComponent);
exports.BigBreadcrumbsComponent = BigBreadcrumbsComponent;
//# sourceMappingURL=big-breadcrumbs.component.js.map