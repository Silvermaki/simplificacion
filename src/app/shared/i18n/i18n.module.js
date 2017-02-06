"use strict";
var core_1 = require("@angular/core");
var language_selector_component_1 = require("./language-selector/language-selector.component");
var i18n_pipe_1 = require("./i18n.pipe");
var i18n_service_1 = require("./i18n.service");
var common_1 = require("@angular/common");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var I18nModule = (function () {
    function I18nModule() {
    }
    return I18nModule;
}());
I18nModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_bootstrap_1.DropdownModule,
        ],
        declarations: [
            language_selector_component_1.LanguageSelectorComponent,
            i18n_pipe_1.I18nPipe
        ],
        exports: [language_selector_component_1.LanguageSelectorComponent, i18n_pipe_1.I18nPipe],
        providers: [i18n_service_1.I18nService]
    })
], I18nModule);
exports.I18nModule = I18nModule;
//# sourceMappingURL=i18n.module.js.map