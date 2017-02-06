"use strict";
var core_1 = require("@angular/core");
var FieldFilterPipe = (function () {
    function FieldFilterPipe() {
    }
    FieldFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value)
            return items;
        return items.filter(function (it) { return it[field].toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    return FieldFilterPipe;
}());
FieldFilterPipe = __decorate([
    core_1.Pipe({
        name: 'fieldFilter',
    })
], FieldFilterPipe);
exports.FieldFilterPipe = FieldFilterPipe;
//# sourceMappingURL=field-filter.pipe.js.map