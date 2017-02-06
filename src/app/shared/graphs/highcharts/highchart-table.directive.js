"use strict";
var core_1 = require("@angular/core");
var HighchartTable = (function () {
    function HighchartTable(el) {
        this.el = el;
    }
    HighchartTable.prototype.ngOnInit = function () {
        var _this = this;
        // to improve latency for big components smartadmin app we are loading some dependencies async
        System.import('script-loader!highcharts').then(function () {
            return System.import('script-loader!smartadmin-plugins/bower_components/highchartTable/jquery.highchartTable.js');
        }).then(function () {
            $(_this.el.nativeElement).highchartTable();
        });
    };
    return HighchartTable;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HighchartTable.prototype, "saHighchartTable", void 0);
HighchartTable = __decorate([
    core_1.Directive({
        selector: '[saHighchartTable]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HighchartTable);
exports.HighchartTable = HighchartTable;
//# sourceMappingURL=highchart-table.directive.js.map