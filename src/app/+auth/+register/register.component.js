"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (event) {
        event.preventDefault();
        this.router.navigate(['/principal/dashboard/analytics']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map