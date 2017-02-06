"use strict";
var core_1 = require("@angular/core");
var FlotChartComponent = (function () {
    function FlotChartComponent(el) {
        this.el = el;
        this.graphClass = '';
        this.width = '100%';
        this.height = '250px';
        this.vendorLoaded = false;
    }
    FlotChartComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        System.import('imports-loader?this=>window!smartadmin-plugins/flot-bundle/flot-bundle.min.js').then(function () {
            _this.vendorLoaded = true;
            _this.render(_this.data);
        });
    };
    FlotChartComponent.prototype.render = function (data) {
        if (data) {
            $.plot(this.el.nativeElement.children[0], data, this.options);
        }
    };
    FlotChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.vendorLoaded && changes.data.currentValue) {
            this.render(changes.data.currentValue);
        }
    };
    return FlotChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "graphClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "height", void 0);
FlotChartComponent = __decorate([
    core_1.Component({
        selector: 'sa-flot-chart',
        template: "\n    <div class=\"sa-flot-chart\" [ngStyle]=\"{width: width, height: height}\">&nbsp;</div>\n  ",
        styles: ["\n  .sa-flot-chart{\n    overflow: hidden;\n  }\n"]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FlotChartComponent);
exports.FlotChartComponent = FlotChartComponent;
//# sourceMappingURL=flot-chart.component.js.map