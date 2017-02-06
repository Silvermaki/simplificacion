"use strict";
var core_1 = require("@angular/core");
var MessageLabelsComponent = (function () {
    function MessageLabelsComponent() {
        this.LABELS = {
            home: {
                name: "HOME",
                color: "teal"
            },
            work: {
                name: "WORK",
                color: "orange"
            }
        };
    }
    MessageLabelsComponent.prototype.ngOnInit = function () { };
    return MessageLabelsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MessageLabelsComponent.prototype, "message", void 0);
MessageLabelsComponent = __decorate([
    core_1.Component({
        selector: 'message-labels',
        template: '<span *ngFor="let label of message.labels" class="label bg-color-{{LABELS[label].color}}">{{LABELS[label].name}}</span>',
    }),
    __metadata("design:paramtypes", [])
], MessageLabelsComponent);
exports.MessageLabelsComponent = MessageLabelsComponent;
//# sourceMappingURL=message-labels.component.js.map