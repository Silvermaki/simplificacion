"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var outlook_message_class_1 = require("../shared/outlook-message.class");
var outlook_service_1 = require("../shared/outlook.service");
var ReplayComponent = (function () {
    function ReplayComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.carbonCopy = false;
        this.blindCarbonCopy = false;
        this.attachments = false;
        this.sending = false;
    }
    ReplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.replayToSub = _this.service.getMessage(params['id']).subscribe(function (message) {
                return _this.replayTo = new outlook_message_class_1.OutlookMessage(message);
            });
        });
    };
    ReplayComponent.prototype.ngOnDestroy = function () {
        this.replayToSub.unsubscribe();
        this.paramsSub.unsubscribe();
    };
    ReplayComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        setTimeout(function () {
            _this.router.navigate(['/outlook']);
        }, 2000);
    };
    return ReplayComponent;
}());
ReplayComponent = __decorate([
    core_1.Component({
        selector: 'sa-replay',
        templateUrl: './replay.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        outlook_service_1.OutlookService])
], ReplayComponent);
exports.ReplayComponent = ReplayComponent;
//# sourceMappingURL=replay.component.js.map