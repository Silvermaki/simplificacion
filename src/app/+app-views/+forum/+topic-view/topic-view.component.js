"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../../shared/animations/fade-in-top.decorator");
var TopicViewComponent = (function () {
    function TopicViewComponent() {
    }
    TopicViewComponent.prototype.ngOnInit = function () {
    };
    return TopicViewComponent;
}());
TopicViewComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-topic-view',
        templateUrl: './topic-view.component.html',
    }),
    __metadata("design:paramtypes", [])
], TopicViewComponent);
exports.TopicViewComponent = TopicViewComponent;
//# sourceMappingURL=topic-view.component.js.map