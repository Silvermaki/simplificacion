"use strict";
var core_1 = require("@angular/core");
var MorrisGraphComponent = (function () {
    function MorrisGraphComponent(el) {
        this.el = el;
    }
    MorrisGraphComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        System.import('script-loader!raphael').then(function () {
            return System.import('morris.js/morris.js');
        }).then(function () {
            options.element = _this.el.nativeElement.children[0];
            options.data = _this.data;
            switch (_this.type) {
                case 'area':
                    Morris.Area(options);
                    break;
                case 'bar':
                    Morris.Bar(options);
                    break;
                case 'line':
                    Morris.Line(options);
                    break;
                case 'donut':
                    Morris.Donut(options);
                    break;
            }
        });
        var options = this.options || {};
    };
    return MorrisGraphComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MorrisGraphComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MorrisGraphComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MorrisGraphComponent.prototype, "type", void 0);
MorrisGraphComponent = __decorate([
    core_1.Component({
        selector: 'sa-morris-graph',
        template: "\n     <div class=\"chart no-padding\" ></div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MorrisGraphComponent);
exports.MorrisGraphComponent = MorrisGraphComponent;
//# sourceMappingURL=morris-graph.component.js.map