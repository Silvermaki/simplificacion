"use strict";
var core_1 = require("@angular/core");
var DraggableEvent = (function () {
    function DraggableEvent(el) {
        this.el = el;
    }
    DraggableEvent.prototype.ngOnInit = function () {
        this.type = this.event.className;
        $(this.el.nativeElement)
            .data('eventObject', this.event)
            .draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0 //  original position after the drag
        });
    };
    return DraggableEvent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DraggableEvent.prototype, "event", void 0);
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], DraggableEvent.prototype, "type", void 0);
DraggableEvent = __decorate([
    core_1.Directive({
        selector: '[saDraggableEvent]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DraggableEvent);
exports.DraggableEvent = DraggableEvent;
//# sourceMappingURL=draggable-event.directive.js.map