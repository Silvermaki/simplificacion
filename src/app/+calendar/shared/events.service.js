"use strict";
var core_1 = require("@angular/core");
var EVENTS_MOCK_1 = require("./EVENTS_MOCK");
var EXTERNAL_EVENTS_MOCK_1 = require("./EXTERNAL_EVENTS_MOCK");
var Rx_1 = require("rxjs/Rx");
var EventsService = (function () {
    function EventsService() {
        this.store = {
            events: EVENTS_MOCK_1.default,
            externalEvents: EXTERNAL_EVENTS_MOCK_1.externalEvents,
            removeAfterDrop: false,
        };
        this.subject = new Rx_1.Subject();
    }
    EventsService.prototype.subscribe = function (next, error, complete) {
        return this.subject.subscribe(next, error, complete);
    };
    EventsService.prototype.addEvent = function (event) {
        var dropId = event.id;
        event.id = this.generateId();
        this.store.events.push(event);
        if (this.store.removeAfterDrop) {
            this.store.externalEvents.splice(this.store.externalEvents.findIndex(function (it) { return it.id == dropId; }), 1);
        }
        this.subject.next(this.store);
    };
    EventsService.prototype.addExternalEvent = function (event) {
        this.store.externalEvents.push(event);
        this.subject.next(this.store);
    };
    EventsService.prototype.setRemoveAfterDrop = function (value) {
        this.store.removeAfterDrop = value;
        this.subject.next(this.store);
    };
    EventsService.prototype.generateId = function () {
        return Math.random().toString(36).slice(2);
    };
    return EventsService;
}());
EventsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map