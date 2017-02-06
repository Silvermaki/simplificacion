"use strict";
var core_1 = require("@angular/core");
var ng2_redux_1 = require("ng2-redux");
var options_actions_1 = require("../actions/options.actions");
var OptionRadioComponent = OptionRadioComponent_1 = (function () {
    function OptionRadioComponent(ngRedux, actions) {
        this.ngRedux = ngRedux;
        this.actions = actions;
        this.id = 'jcrop-option-radio-' + OptionRadioComponent_1.idCounter++;
    }
    OptionRadioComponent.prototype.ngOnInit = function () {
    };
    OptionRadioComponent.prototype.onChange = function () {
        this.actions.setOptions({
            options: this.options,
            storeId: this.storeId
        });
    };
    return OptionRadioComponent;
}());
OptionRadioComponent.idCounter = 0;
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OptionRadioComponent.prototype, "checked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OptionRadioComponent.prototype, "group", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OptionRadioComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OptionRadioComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OptionRadioComponent.prototype, "storeId", void 0);
OptionRadioComponent = OptionRadioComponent_1 = __decorate([
    core_1.Component({
        selector: 'jcrop-option-radio',
        template: "\n    <div >\n        <input (change)=\"onChange()\" [checked]=\"checked\" name=\"{{group}}\" type=\"radio\" id=\"{{id}}\" />\n        <label htmlFor=\"{{id}}\">{{label}}</label>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [ng2_redux_1.NgRedux, options_actions_1.OptionsActions])
], OptionRadioComponent);
exports.OptionRadioComponent = OptionRadioComponent;
var OptionRadioComponent_1;
//# sourceMappingURL=option-radio.component.js.map