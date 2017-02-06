"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../../shared/animations/fade-in-top.decorator");
var FontAwesomeComponent = (function () {
    function FontAwesomeComponent(el) {
        this.el = el;
        this.search = '';
    }
    FontAwesomeComponent.prototype.ngOnInit = function () {
        this.containers = this.el.nativeElement.querySelectorAll('.demo-icon-font');
    };
    // without strong typing
    FontAwesomeComponent.prototype.onKey = function (event) {
        var _this = this;
        this.search = event.target.value;
        Array.prototype.forEach.call(this.containers, function (container) {
            if (container.querySelectorAll('[class*="' + _this.search + '"]').length > 0) {
                container.style.display = 'block';
            }
            else {
                if (_this.search) {
                    container.style.display = 'none';
                }
                else {
                    container.style.display = 'block';
                }
            }
        });
    };
    return FontAwesomeComponent;
}());
FontAwesomeComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-font-awesome',
        templateUrl: './font-awesome.component.html',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FontAwesomeComponent);
exports.FontAwesomeComponent = FontAwesomeComponent;
//# sourceMappingURL=font-awesome.component.js.map