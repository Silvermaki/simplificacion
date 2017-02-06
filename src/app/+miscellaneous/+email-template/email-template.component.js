"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var EmailTemplateComponent = (function () {
    function EmailTemplateComponent() {
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
    };
    return EmailTemplateComponent;
}());
EmailTemplateComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-email-template',
        templateUrl: './email-template.component.html',
    }),
    __metadata("design:paramtypes", [])
], EmailTemplateComponent);
exports.EmailTemplateComponent = EmailTemplateComponent;
//# sourceMappingURL=email-template.component.js.map