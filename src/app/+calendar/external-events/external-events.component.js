"use strict";
var core_1 = require("@angular/core");
var events_service_1 = require("../shared/events.service");
var ExternalEventsComponent = (function () {
    function ExternalEventsComponent(eventsService) {
        this.eventsService = eventsService;
        this.removeAfterDrop = false;
    }
    ExternalEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events = this.eventsService.store.externalEvents;
        this.removeAfterDrop = this.eventsService.store.removeAfterDrop;
        this.sub = this.eventsService.subscribe(function (store) {
            _this.events = store.externalEvents;
        });
    };
    ExternalEventsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExternalEventsComponent.prototype.toggleRemoveAfterDrop = function () {
        this.eventsService.setRemoveAfterDrop(this.removeAfterDrop);
    };
    return ExternalEventsComponent;
}());
ExternalEventsComponent = __decorate([
    core_1.Component({
        selector: 'sa-external-events',
        templateUrl: './external-events.component.html',
    }),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], ExternalEventsComponent);
exports.ExternalEventsComponent = ExternalEventsComponent;
//# sourceMappingURL=external-events.component.js.map