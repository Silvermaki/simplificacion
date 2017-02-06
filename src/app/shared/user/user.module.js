"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_info_component_1 = require("./login-info/login-info.component");
var logout_component_1 = require("./logout/logout.component");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [login_info_component_1.LoginInfoComponent, logout_component_1.LogoutComponent],
        exports: [login_info_component_1.LoginInfoComponent, logout_component_1.LogoutComponent]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map