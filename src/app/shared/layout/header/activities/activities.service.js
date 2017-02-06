"use strict";
var core_1 = require("@angular/core");
var json_api_service_1 = require("../../../../core/api/json-api.service");
var ActivitiesService = (function () {
    function ActivitiesService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.url = '/activities/activities.json';
    }
    ActivitiesService.prototype.getActivities = function () {
        return this.jsonApiService.fetch(this.url);
    };
    return ActivitiesService;
}());
ActivitiesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], ActivitiesService);
exports.ActivitiesService = ActivitiesService;
//# sourceMappingURL=activities.service.js.map