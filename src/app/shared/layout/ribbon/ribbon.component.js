"use strict";
var core_1 = require("@angular/core");
var layout_service_1 = require("../layout.service");
var RibbonComponent = (function () {
    function RibbonComponent(layoutService) {
        this.layoutService = layoutService;
    }
    RibbonComponent.prototype.ngOnInit = function () {
    };
    RibbonComponent.prototype.resetWidgets = function () {
        this.layoutService.factoryReset();
    };
    return RibbonComponent;
}());
RibbonComponent = __decorate([
    core_1.Component({
        selector: 'sa-ribbon',
        templateUrl: './ribbon.component.html'
    }),
    __metadata("design:paramtypes", [layout_service_1.LayoutService])
], RibbonComponent);
exports.RibbonComponent = RibbonComponent;
//# sourceMappingURL=ribbon.component.js.map