"use strict";
var core_1 = require("@angular/core");
var crop_actions_1 = require("../actions/crop.actions");
var ng2_redux_1 = require("ng2-redux");
var FieldComponent = FieldComponent_1 = (function () {
    function FieldComponent(actions, ngRedux) {
        this.actions = actions;
        this.ngRedux = ngRedux;
        this.id = 'jcrop-field-' + FieldComponent_1.idCounter++;
    }
    FieldComponent.prototype.ngOnInit = function () {
        this.value$ = this.ngRedux.select([this.storeId, 'crop', 'selection', this.field]);
    };
    return FieldComponent;
}());
FieldComponent.idCounter = 0;
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FieldComponent.prototype, "field", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FieldComponent.prototype, "storeId", void 0);
FieldComponent = FieldComponent_1 = __decorate([
    core_1.Component({
        selector: 'jcrop-field',
        template: "\n    <div>\n        <input type=\"number\" id=\"{{id}}\"                                              \n               #input\n               [value]=\"value$ | async\"\n               (change)=\"actions.cropFieldChange(field, input.value, storeId)\"/>\n        <label htmlFor=\"{{id}}\" class=\"active\">{{field}}</label>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [crop_actions_1.CropActions, ng2_redux_1.NgRedux])
], FieldComponent);
exports.FieldComponent = FieldComponent;
var FieldComponent_1;
//# sourceMappingURL=field.component.js.map