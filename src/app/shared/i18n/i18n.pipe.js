"use strict";
var core_1 = require("@angular/core");
var i18n_service_1 = require("./i18n.service");
var I18nPipe = (function () {
    function I18nPipe(i18nService) {
        this.i18nService = i18nService;
    }
    I18nPipe.prototype.transform = function (phrase, args) {
        return this.i18nService.getTranslation(phrase);
    };
    return I18nPipe;
}());
I18nPipe = __decorate([
    core_1.Pipe({
        name: 'i18n',
        pure: false
    }),
    __metadata("design:paramtypes", [i18n_service_1.I18nService])
], I18nPipe);
exports.I18nPipe = I18nPipe;
//# sourceMappingURL=i18n.pipe.js.map