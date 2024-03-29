"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var notification_service_1 = require("../../utils/notification.service");
var LogoutComponent = (function () {
    function LogoutComponent(router, notificationService) {
        this.router = router;
        this.notificationService = notificationService;
    }
    LogoutComponent.prototype.showPopup = function () {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Desconectarse <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content: "¿Desconectarse de MiEmpresaEnLínea?",
            buttons: '[No][Desconectarse]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Desconectarse") {
                _this.logout();
            }
        });
    };
    LogoutComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    core_1.Component({
        selector: 'sa-logout',
        template: "\n<div id=\"logout\" (click)=\"showPopup()\" class=\"btn-header transparent pull-right\">\n        <span> <a routerlink=\"/login\" title=\"Sign Out\" data-action=\"userLogout\"\n                  data-logout-msg=\"\u00BFDesconectarse de MiEmpresaEnL\u00EDnea?\"><i\n          class=\"fa fa-sign-out\"></i></a> </span>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [router_1.Router,
        notification_service_1.NotificationService])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map