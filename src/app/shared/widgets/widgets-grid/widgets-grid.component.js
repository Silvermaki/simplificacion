"use strict";
var core_1 = require("@angular/core");
var widget_defaults_1 = require("../widget.defaults");
var core_2 = require("@angular/core");
require("smartadmin-plugins/smartwidgets/jarvis.widget.ng2.js");
var WidgetsGridComponent = (function () {
    function WidgetsGridComponent(el) {
        this.el = el;
    }
    WidgetsGridComponent.prototype.ngAfterViewInit = function () {
        $('#widgets-grid', this.el.nativeElement).jarvisWidgets(widget_defaults_1.default);
    };
    return WidgetsGridComponent;
}());
WidgetsGridComponent = __decorate([
    core_1.Component({
        selector: 'sa-widgets-grid',
        template: "\n     <section id=\"widgets-grid\">\n       <ng-content></ng-content>\n     </section>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [core_2.ElementRef])
], WidgetsGridComponent);
exports.WidgetsGridComponent = WidgetsGridComponent;
//# sourceMappingURL=widgets-grid.component.js.map