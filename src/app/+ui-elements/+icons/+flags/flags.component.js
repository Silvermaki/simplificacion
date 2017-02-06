"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../../shared/animations/fade-in-top.decorator");
var FlagsComponent = (function () {
    function FlagsComponent(el) {
        this.el = el;
        this.search = '';
    }
    FlagsComponent.prototype.ngOnInit = function () {
        this.containers = this.el.nativeElement.querySelectorAll('.demo-icon-font');
    };
    FlagsComponent.prototype.onKey = function (event) {
        var _this = this;
        this.search = event.target.value;
        Array.prototype.forEach.call(this.containers, function (container) {
            if (container.querySelectorAll('[class*="' + _this.search + '"]').length > 0 ||
                (_this.search.length > 1 && container.innerHTML.toLowerCase().search(_this.search) > -1)) {
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
    return FlagsComponent;
}());
FlagsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-flags',
        templateUrl: './flags.component.html',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FlagsComponent);
exports.FlagsComponent = FlagsComponent;
//# sourceMappingURL=flags.component.js.map