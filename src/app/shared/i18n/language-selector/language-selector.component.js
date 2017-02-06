"use strict";
var core_1 = require("@angular/core");
var languages_model_1 = require("../languages.model");
var i18n_service_1 = require("../i18n.service");
var LanguageSelectorComponent = (function () {
    function LanguageSelectorComponent(i18n) {
        this.i18n = i18n;
    }
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        this.languages = languages_model_1.languages;
        this.currentLanguage = this.i18n.currentLanguage;
    };
    LanguageSelectorComponent.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.i18n.setLanguage(language);
    };
    return LanguageSelectorComponent;
}());
LanguageSelectorComponent = __decorate([
    core_1.Component({
        selector: 'sa-language-selector',
        templateUrl: './language-selector.component.html',
    }),
    __metadata("design:paramtypes", [i18n_service_1.I18nService])
], LanguageSelectorComponent);
exports.LanguageSelectorComponent = LanguageSelectorComponent;
//# sourceMappingURL=language-selector.component.js.map