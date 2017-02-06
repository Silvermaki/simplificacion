"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var SocialComponent = (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    return SocialComponent;
}());
SocialComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-social',
        templateUrl: './social.component.html',
    })
], SocialComponent);
exports.SocialComponent = SocialComponent;
//# sourceMappingURL=social.component.js.map