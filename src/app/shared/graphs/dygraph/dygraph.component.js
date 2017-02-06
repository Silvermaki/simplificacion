"use strict";
var core_1 = require("@angular/core");
var DygraphComponent = (function () {
    function DygraphComponent(el) {
        this.el = el;
        this.options = {};
        this.data = {};
        this.width = '100%';
        this.height = '300px';
    }
    DygraphComponent.prototype.ngOnInit = function () {
    };
    DygraphComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // to improve latency for big components smartadmin app we are loading dependency async
        System.import('dygraphs').then(function (Dygraph) {
            new Dygraph(_this.el.nativeElement.children[0], _this.data, _this.options);
        });
    };
    return DygraphComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DygraphComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DygraphComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DygraphComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DygraphComponent.prototype, "height", void 0);
DygraphComponent = __decorate([
    core_1.Component({
        selector: 'sa-dygraph',
        template: "\n    <div [ngStyle]=\"{width: width, height: height}\" >\n      dygraph canvas!\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DygraphComponent);
exports.DygraphComponent = DygraphComponent;
//# sourceMappingURL=dygraph.component.js.map