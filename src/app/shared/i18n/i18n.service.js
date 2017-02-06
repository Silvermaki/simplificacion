"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var smartadmin_config_1 = require("../smartadmin.config");
var languages_model_1 = require("./languages.model");
var json_api_service_1 = require("../../core/api/json-api.service");
var I18nService = (function () {
    function I18nService(jsonApiService, ref) {
        this.jsonApiService = jsonApiService;
        this.ref = ref;
        this.state = new Rx_1.Subject();
        this.initLanguage(smartadmin_config_1.config.defaultLocale || 'us');
        this.fetch(this.currentLanguage.key);
    }
    I18nService.prototype.fetch = function (locale) {
        var _this = this;
        this.jsonApiService.fetch("/langs/" + locale + ".json")
            .subscribe(function (data) {
            _this.data = data;
            _this.state.next(data);
            _this.ref.tick();
        });
    };
    I18nService.prototype.initLanguage = function (locale) {
        var language = languages_model_1.languages.find(function (it) {
            return it.key == locale;
        });
        if (language) {
            this.currentLanguage = language;
        }
        else {
            throw new Error("Incorrect locale used for I18nService: " + locale);
        }
    };
    I18nService.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.fetch(language.key);
    };
    I18nService.prototype.subscribe = function (sub, err) {
        return this.state.subscribe(sub, err);
    };
    I18nService.prototype.getTranslation = function (phrase) {
        return this.data && this.data[phrase] ? this.data[phrase] : phrase;
    };
    return I18nService;
}());
I18nService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService, core_1.ApplicationRef])
], I18nService);
exports.I18nService = I18nService;
//# sourceMappingURL=i18n.service.js.map