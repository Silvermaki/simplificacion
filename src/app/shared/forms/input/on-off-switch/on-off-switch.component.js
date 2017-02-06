"use strict";
var core_1 = require("@angular/core");
var OnOffSwitchComponent = OnOffSwitchComponent_1 = (function () {
    function OnOffSwitchComponent() {
        this.modelChange = new core_1.EventEmitter();
    }
    OnOffSwitchComponent.prototype.ngOnInit = function () {
        this.value = this.model;
        this.widgetId = 'on-off-switch' + OnOffSwitchComponent_1.widgetsCounter++;
    };
    OnOffSwitchComponent.prototype.onChange = function () {
        this.modelChange.emit(this.value);
    };
    return OnOffSwitchComponent;
}());
OnOffSwitchComponent.widgetsCounter = 0;
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OnOffSwitchComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OnOffSwitchComponent.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "modelChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "value", void 0);
OnOffSwitchComponent = OnOffSwitchComponent_1 = __decorate([
    core_1.Component({
        selector: 'on-off-switch',
        templateUrl: './on-off-switch.component.html',
    }),
    __metadata("design:paramtypes", [])
], OnOffSwitchComponent);
exports.OnOffSwitchComponent = OnOffSwitchComponent;
var OnOffSwitchComponent_1;
//# sourceMappingURL=on-off-switch.component.js.map