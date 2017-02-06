"use strict";
var core_1 = require("@angular/core");
var BodyService = (function () {
    function BodyService() {
        this.$body = $('body');
    }
    BodyService.prototype.addClass = function (className) {
        this.$body.addClass(className);
    };
    BodyService.prototype.removeClass = function (className) {
        this.$body.removeClass(className);
    };
    BodyService.prototype.toggleClass = function (className, state) {
        this.$body.toggleClass(className, state);
    };
    return BodyService;
}());
BodyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BodyService);
exports.BodyService = BodyService;
//# sourceMappingURL=body.service.js.map