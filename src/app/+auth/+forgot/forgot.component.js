"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ForgotComponent = (function () {
    function ForgotComponent(router) {
        this.router = router;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.submit = function (event) {
        event.preventDefault();
        this.router.navigate(['/principal/dashboard/estadisticas']);
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    core_1.Component({
        selector: 'app-forgot',
        templateUrl: './forgot.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ForgotComponent);
exports.ForgotComponent = ForgotComponent;
//# sourceMappingURL=forgot.component.js.map