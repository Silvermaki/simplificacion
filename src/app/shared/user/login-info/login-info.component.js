"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("../user.service");
var layout_service_1 = require("../../layout/layout.service");
var LoginInfoComponent = (function () {
    function LoginInfoComponent(userService, layoutService) {
        this.userService = userService;
        this.layoutService = layoutService;
    }
    LoginInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoginInfo().subscribe(function (user) {
            _this.user = user;
        });
    };
    LoginInfoComponent.prototype.toggleShortcut = function () {
        this.layoutService.onShortcutToggle();
    };
    return LoginInfoComponent;
}());
LoginInfoComponent = __decorate([
    core_1.Component({
        selector: 'sa-login-info',
        templateUrl: './login-info.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        layout_service_1.LayoutService])
], LoginInfoComponent);
exports.LoginInfoComponent = LoginInfoComponent;
//# sourceMappingURL=login-info.component.js.map