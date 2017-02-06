"use strict";
var core_1 = require("@angular/core");
var directives_1 = require("@angular/core/src/metadata/directives");
var FieldsComponent = (function () {
    function FieldsComponent() {
        this.fields = ['x', 'y', 'x2', 'y2'];
    }
    FieldsComponent.prototype.ngOnInit = function () {
    };
    return FieldsComponent;
}());
__decorate([
    directives_1.Input(),
    __metadata("design:type", String)
], FieldsComponent.prototype, "storeId", void 0);
FieldsComponent = __decorate([
    core_1.Component({
        selector: 'jcrop-fields',
        template: "\n    \n    <jcrop-field *ngFor=\"let field of fields\" [field]=\"field\" [storeId]=\"storeId\"></jcrop-field> \n    \n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], FieldsComponent);
exports.FieldsComponent = FieldsComponent;
//# sourceMappingURL=fields.component.js.map