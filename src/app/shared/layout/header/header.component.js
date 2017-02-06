"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.searchMobileActive = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSearchMobile = function () {
        this.searchMobileActive = !this.searchMobileActive;
        $('body').toggleClass('search-mobile', this.searchMobileActive);
    };
    HeaderComponent.prototype.onSubmit = function () {
        this.router.navigate(['/miscellaneous/search']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'sa-header',
        templateUrl: './header.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map