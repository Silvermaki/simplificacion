"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../auth.service");
var LoginComponent = (function () {
    function LoginComponent(router, AuthenticationService) {
        this.router = router;
        this.AuthenticationService = AuthenticationService;
        this.login_validations = {
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                email: {
                    required: 'Debe de ingresar su correo electrónico',
                    email: 'El formato de correo es inválido'
                },
                password: {
                    required: 'Debe de ingresar una contraseña'
                }
            }
        };
        this.login_detail = {
            username: "",
            password: ""
        };
        this.error = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.disableLogin() == false) {
            this.AuthenticationService.login(this.login_detail).subscribe(function (data) { _this.load = data, _this.checkData(); }, function (err) { return console.log(err); });
        }
    };
    LoginComponent.prototype.checkData = function () {
        var result = this.load[0][0]['mensaje'];
        if (result == -1971) {
            this.error = "Usuario o Contraseña incorrectos";
        }
        else {
            this.error = "";
            sessionStorage.setItem("user", JSON.stringify({ hash: result }));
            this.router.navigate(['/principal']);
        }
    };
    LoginComponent.prototype.disableLogin = function () {
        if (this.login_detail.username.length < 1 || !(this.login_detail.username.indexOf("@") >= 0) || this.login_detail.username.indexOf("@") === this.login_detail.username.length - 1) {
            return true;
        }
        if (this.login_detail.password.length < 1) {
            return true;
        }
        return false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map