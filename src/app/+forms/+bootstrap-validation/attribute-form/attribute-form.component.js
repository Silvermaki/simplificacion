"use strict";
var core_1 = require("@angular/core");
var AttributeFormComponent = (function () {
    function AttributeFormComponent() {
        this.submitted = false;
    }
    AttributeFormComponent.prototype.ngOnInit = function () {
    };
    AttributeFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    return AttributeFormComponent;
}());
AttributeFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-attribute-form',
        templateUrl: './attribute-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], AttributeFormComponent);
exports.AttributeFormComponent = AttributeFormComponent;
//# sourceMappingURL=attribute-form.component.js.map