"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LockedComponent = (function () {
    function LockedComponent(router) {
        this.router = router;
    }
    LockedComponent.prototype.ngOnInit = function () {
    };
    LockedComponent.prototype.unlock = function (event) {
        event.preventDefault();
        this.router.navigate(['/dashboard/+analytics']);
    };
    return LockedComponent;
}());
LockedComponent = __decorate([
    core_1.Component({
        selector: 'app-locked',
        templateUrl: './locked.component.html',
        styleUrls: [
            './locked.component.css'
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LockedComponent);
exports.LockedComponent = LockedComponent;
//# sourceMappingURL=locked.component.js.map