"use strict";
var core_1 = require("@angular/core");
var layout_service_1 = require("../../layout.service");
var CollapseMenuComponent = (function () {
    function CollapseMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    CollapseMenuComponent.prototype.onToggle = function () {
        this.layoutService.onCollapseMenu();
    };
    return CollapseMenuComponent;
}());
CollapseMenuComponent = __decorate([
    core_1.Component({
        selector: 'sa-collapse-menu',
        templateUrl: './collapse-menu.component.html'
    }),
    __metadata("design:paramtypes", [layout_service_1.LayoutService])
], CollapseMenuComponent);
exports.CollapseMenuComponent = CollapseMenuComponent;
//# sourceMappingURL=collapse-menu.component.js.map