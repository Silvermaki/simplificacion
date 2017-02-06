"use strict";
var core_1 = require("@angular/core");
var moment_pipe_1 = require("./moment.pipe");
var time_directive_1 = require("./time.directive");
var field_filter_pipe_1 = require("./field-filter.pipe");
var body_service_1 = require("./body.service");
var notification_service_1 = require("./notification.service");
var toggle_active_directive_1 = require("./toggle-active.directive");
var UtilsModule = UtilsModule_1 = (function () {
    function UtilsModule() {
    }
    UtilsModule.forRoot = function () {
        return {
            ngModule: UtilsModule_1,
            providers: [body_service_1.BodyService, notification_service_1.NotificationService]
        };
    };
    return UtilsModule;
}());
UtilsModule = UtilsModule_1 = __decorate([
    core_1.NgModule({
        declarations: [toggle_active_directive_1.ToggleActiveDirective, moment_pipe_1.MomentPipe, time_directive_1.TimeDirective, field_filter_pipe_1.FieldFilterPipe],
        exports: [toggle_active_directive_1.ToggleActiveDirective, moment_pipe_1.MomentPipe, time_directive_1.TimeDirective, field_filter_pipe_1.FieldFilterPipe],
        providers: [body_service_1.BodyService, notification_service_1.NotificationService]
    })
], UtilsModule);
exports.UtilsModule = UtilsModule;
var UtilsModule_1;
//# sourceMappingURL=utils.module.js.map