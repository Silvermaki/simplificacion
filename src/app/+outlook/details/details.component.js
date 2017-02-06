"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var outlook_message_class_1 = require("../shared/outlook-message.class");
var outlook_service_1 = require("../shared/outlook.service");
var DetailsComponent = (function () {
    function DetailsComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.messageSub = _this.service.getMessage(params['id']).subscribe(function (message) {
                return _this.message = new outlook_message_class_1.OutlookMessage(message);
            });
        });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        selector: 'sa-details',
        templateUrl: './details.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        outlook_service_1.OutlookService])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map