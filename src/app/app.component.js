"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map