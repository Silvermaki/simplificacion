"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var ButtonsComponent = (function () {
    function ButtonsComponent() {
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-buttons',
        templateUrl: './buttons.component.html',
    }),
    __metadata("design:paramtypes", [])
], ButtonsComponent);
exports.ButtonsComponent = ButtonsComponent;
//# sourceMappingURL=buttons.component.js.map