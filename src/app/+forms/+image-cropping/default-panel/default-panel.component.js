"use strict";
var core_1 = require("@angular/core");
var ng2_redux_1 = require("ng2-redux");
var directives_1 = require("@angular/core/src/metadata/directives");
var DefaultPanelComponent = (function () {
    function DefaultPanelComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.storeId = 'defaultPanel';
    }
    DefaultPanelComponent.prototype.ngOnInit = function () {
    };
    return DefaultPanelComponent;
}());
__decorate([
    directives_1.Input(),
    __metadata("design:type", Boolean)
], DefaultPanelComponent.prototype, "active", void 0);
DefaultPanelComponent = __decorate([
    core_1.Component({
        selector: 'image-editor-default-panel',
        template: "\n            <section>\n                <jcrop\n                    [storeId]=\"storeId\" \n                    src=\"assets/img/superbox/superbox-full-11.jpg\"\n                    [width]=\"600\" [height]=\"400\"></jcrop>\n            </section>\n",
    }),
    __metadata("design:paramtypes", [ng2_redux_1.NgRedux])
], DefaultPanelComponent);
exports.DefaultPanelComponent = DefaultPanelComponent;
//# sourceMappingURL=default-panel.component.js.map