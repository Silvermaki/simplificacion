"use strict";
var core_1 = require("@angular/core");
var ActivitiesNotificationComponent = (function () {
    function ActivitiesNotificationComponent() {
    }
    ActivitiesNotificationComponent.prototype.ngOnInit = function () {
    };
    ActivitiesNotificationComponent.prototype.setClasses = function () {
        var classes = {
            'fa fa-fw fa-2x': true
        };
        classes[this.item.icon] = true;
        return classes;
    };
    return ActivitiesNotificationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ActivitiesNotificationComponent.prototype, "item", void 0);
ActivitiesNotificationComponent = __decorate([
    core_1.Component({
        selector: '[activitiesNotification]',
        templateUrl: './activities-notification.component.html',
    }),
    __metadata("design:paramtypes", [])
], ActivitiesNotificationComponent);
exports.ActivitiesNotificationComponent = ActivitiesNotificationComponent;
//# sourceMappingURL=activities-notification.component.js.map