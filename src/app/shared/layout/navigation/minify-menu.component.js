"use strict";
var core_1 = require("@angular/core");
var layout_service_1 = require("../layout.service");
var MinifyMenuComponent = (function () {
    function MinifyMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    MinifyMenuComponent.prototype.toggle = function () {
        this.layoutService.onMinifyMenu();
    };
    return MinifyMenuComponent;
}());
MinifyMenuComponent = __decorate([
    core_1.Component({
        selector: 'sa-minify-menu',
        template: "<span class=\"minifyme\" (click)=\"toggle()\">\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n</span>",
    }),
    __metadata("design:paramtypes", [layout_service_1.LayoutService])
], MinifyMenuComponent);
exports.MinifyMenuComponent = MinifyMenuComponent;
//# sourceMappingURL=minify-menu.component.js.map