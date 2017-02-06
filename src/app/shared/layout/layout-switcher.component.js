"use strict";
var core_1 = require("@angular/core");
var layout_service_1 = require("./layout.service");
var LayoutSwitcherComponent = (function () {
    function LayoutSwitcherComponent(layoutService) {
        this.layoutService = layoutService;
    }
    LayoutSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.layoutService.subscribe(function (store) {
            _this.store = store;
        });
        this.store = this.layoutService.store;
    };
    LayoutSwitcherComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LayoutSwitcherComponent.prototype.onToggle = function () {
        this.isActivated = !this.isActivated;
    };
    LayoutSwitcherComponent.prototype.onSmartSkin = function (skin) {
        this.layoutService.onSmartSkin(skin);
    };
    LayoutSwitcherComponent.prototype.onFixedHeader = function () {
        this.layoutService.onFixedHeader();
    };
    LayoutSwitcherComponent.prototype.onFixedNavigation = function () {
        this.layoutService.onFixedNavigation();
    };
    LayoutSwitcherComponent.prototype.onFixedRibbon = function () {
        this.layoutService.onFixedRibbon();
    };
    LayoutSwitcherComponent.prototype.onFixedPageFooter = function () {
        this.layoutService.onFixedPageFooter();
    };
    LayoutSwitcherComponent.prototype.onInsideContainer = function () {
        this.layoutService.onInsideContainer();
    };
    LayoutSwitcherComponent.prototype.onRtl = function () {
        this.layoutService.onRtl();
    };
    LayoutSwitcherComponent.prototype.onMenuOnTop = function () {
        this.layoutService.onMenuOnTop();
    };
    LayoutSwitcherComponent.prototype.onColorblindFriendly = function () {
        this.layoutService.onColorblindFriendly();
    };
    LayoutSwitcherComponent.prototype.factoryReset = function () {
        this.layoutService.factoryReset();
    };
    return LayoutSwitcherComponent;
}());
LayoutSwitcherComponent = __decorate([
    core_1.Component({
        selector: 'sa-layout-switcher',
        templateUrl: './layout-switcher.component.html'
    }),
    __metadata("design:paramtypes", [layout_service_1.LayoutService])
], LayoutSwitcherComponent);
exports.LayoutSwitcherComponent = LayoutSwitcherComponent;
//# sourceMappingURL=layout-switcher.component.js.map