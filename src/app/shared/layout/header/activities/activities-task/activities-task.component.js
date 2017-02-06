"use strict";
var core_1 = require("@angular/core");
var ActivitiesTaskComponent = (function () {
    function ActivitiesTaskComponent() {
    }
    ActivitiesTaskComponent.prototype.ngOnInit = function () {
    };
    ActivitiesTaskComponent.prototype.setProgressClasses = function () {
        return {
            'progress-bar': true,
            'progress-bar-success': this.item.status == 'MINOR' || this.item.status == 'NORMAL',
            'bg-color-teal': this.item.status == 'PRIMARY' || this.item.status == 'URGENT',
            'progress-bar-danger': this.item.status == 'CRITICAL'
        };
    };
    return ActivitiesTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ActivitiesTaskComponent.prototype, "item", void 0);
ActivitiesTaskComponent = __decorate([
    core_1.Component({
        selector: '[activitiesTask]',
        templateUrl: './activities-task.component.html',
    }),
    __metadata("design:paramtypes", [])
], ActivitiesTaskComponent);
exports.ActivitiesTaskComponent = ActivitiesTaskComponent;
//# sourceMappingURL=activities-task.component.js.map