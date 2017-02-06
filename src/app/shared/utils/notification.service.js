"use strict";
var core_1 = require("@angular/core");
var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.smallBox = function (data, cb) {
        $.smallBox(data, cb);
    };
    NotificationService.prototype.bigBox = function (data, cb) {
        $.bigBox(data, cb);
    };
    NotificationService.prototype.smartMessageBox = function (data, cb) {
        $.SmartMessageBox(data, cb);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map