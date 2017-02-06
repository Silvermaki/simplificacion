"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var outlook_message_class_1 = require("../shared/outlook-message.class");
var outlook_service_1 = require("../shared/outlook.service");
var fade_in_left_decorator_1 = require("../../shared/animations/fade-in-left.decorator");
var ComposeComponent = (function () {
    function ComposeComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.carbonCopy = false;
        this.blindCarbonCopy = false;
        this.attachments = false;
        this.sending = false;
    }
    ComposeComponent.prototype.ngOnInit = function () {
        this.message = new outlook_message_class_1.OutlookMessage({});
    };
    ComposeComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        setTimeout(function () {
            _this.router.navigate(['/outlook']);
        }, 2000);
    };
    return ComposeComponent;
}());
ComposeComponent = __decorate([
    fade_in_left_decorator_1.FadeInLeft(),
    core_1.Component({
        selector: 'sa-compose',
        templateUrl: './compose.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        outlook_service_1.OutlookService])
], ComposeComponent);
exports.ComposeComponent = ComposeComponent;
//# sourceMappingURL=compose.component.js.map