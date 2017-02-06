"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var json_api_service_1 = require("../../core/api/json-api.service");
var UserService = (function () {
    function UserService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.userInfo = {
            username: 'Guest'
        };
        this.user = new Rx_1.Subject();
    }
    UserService.prototype.getLoginInfo = function () {
        var _this = this;
        return this.jsonApiService.fetch('/user/login-info.json')
            .do(function (user) {
            _this.userInfo = user;
            _this.user.next(user);
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map