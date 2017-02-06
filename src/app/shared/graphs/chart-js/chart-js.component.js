"use strict";
var core_1 = require("@angular/core");
var chart_js_presets_1 = require("./chart-js.presets");
var ChartJsComponent = (function () {
    function ChartJsComponent(el) {
        this.el = el;
        this.width = '100%';
    }
    ChartJsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        System.import('chart.js').then(function (chartJs) {
            _this.render();
        });
    };
    ChartJsComponent.prototype.render = function () {
        var ctx = this.getCtx();
        var data = this.data;
        var chart = new Chart(ctx, { type: this.type, data: data, options: chart_js_presets_1.presets[this.type] || {} });
        chart.update();
    };
    ChartJsComponent.prototype.getCtx = function () {
        return this.el.nativeElement.querySelector('canvas').getContext('2d');
    };
    return ChartJsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartJsComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChartJsComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChartJsComponent.prototype, "width", void 0);
ChartJsComponent = __decorate([
    core_1.Component({
        selector: 'sa-chart-js',
        template: "\n    <div>\n      <canvas></canvas>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ChartJsComponent);
exports.ChartJsComponent = ChartJsComponent;
//# sourceMappingURL=chart-js.component.js.map