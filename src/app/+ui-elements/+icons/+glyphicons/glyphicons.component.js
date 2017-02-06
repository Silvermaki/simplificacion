"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../../shared/animations/fade-in-top.decorator");
var GlyphiconsComponent = (function () {
    function GlyphiconsComponent(el) {
        this.el = el;
        this.search = '';
    }
    GlyphiconsComponent.prototype.ngOnInit = function () {
        this.containers = this.el.nativeElement.querySelectorAll('.bs-glyphicons li');
    };
    GlyphiconsComponent.prototype.onKey = function (event) {
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
    return GlyphiconsComponent;
}());
GlyphiconsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-glyphicons',
        templateUrl: './glyphicons.component.html',
        styleUrls: ['./glyphicons.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], GlyphiconsComponent);
exports.GlyphiconsComponent = GlyphiconsComponent;
//# sourceMappingURL=glyphicons.component.js.map