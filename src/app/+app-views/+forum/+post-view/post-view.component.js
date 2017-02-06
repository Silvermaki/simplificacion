"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../../shared/animations/fade-in-top.decorator");
var PostViewComponent = (function () {
    function PostViewComponent() {
    }
    PostViewComponent.prototype.ngOnInit = function () {
    };
    return PostViewComponent;
}());
PostViewComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-post-view',
        templateUrl: './post-view.component.html',
    }),
    __metadata("design:paramtypes", [])
], PostViewComponent);
exports.PostViewComponent = PostViewComponent;
//# sourceMappingURL=post-view.component.js.map