"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-blog',
        templateUrl: './blog.component.html',
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map