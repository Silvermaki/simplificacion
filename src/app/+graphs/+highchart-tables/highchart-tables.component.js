"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var HighchartTablesComponent = (function () {
    function HighchartTablesComponent() {
    }
    HighchartTablesComponent.prototype.ngOnInit = function () {
    };
    return HighchartTablesComponent;
}());
HighchartTablesComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-highchart-tables',
        templateUrl: './highchart-tables.component.html',
    }),
    __metadata("design:paramtypes", [])
], HighchartTablesComponent);
exports.HighchartTablesComponent = HighchartTablesComponent;
//# sourceMappingURL=highchart-tables.component.js.map