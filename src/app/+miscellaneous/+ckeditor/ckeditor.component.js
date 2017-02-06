"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
//noinspection TypeScriptUnresolvedFunction
var $script = require('scriptjs');
var CkeditorComponent = (function () {
    function CkeditorComponent() {
    }
    CkeditorComponent.prototype.ngOnInit = function () {
        $script("https://cdn.ckeditor.com/4.5.11/standard/ckeditor.js", function () {
            var CKEDITOR = window['CKEDITOR'];
            CKEDITOR.replace('ckeditor-showcase');
        });
    };
    return CkeditorComponent;
}());
CkeditorComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-ckeditor',
        templateUrl: './ckeditor.component.html',
    }),
    __metadata("design:paramtypes", [])
], CkeditorComponent);
exports.CkeditorComponent = CkeditorComponent;
//# sourceMappingURL=ckeditor.component.js.map