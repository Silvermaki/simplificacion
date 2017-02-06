"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map