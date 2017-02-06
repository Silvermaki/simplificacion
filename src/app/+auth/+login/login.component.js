"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (event) {
        event.preventDefault();
        this.router.navigate(['/principal/dashboard/analytics']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map