"use strict";
var core_1 = require("@angular/core");
var json_api_service_1 = require("../../core/api/json-api.service");
var MapStyleService = (function () {
    function MapStyleService(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    MapStyleService.prototype.fetchStyle = function (style) {
        return this.jsonApiService.fetch(style.url);
    };
    return MapStyleService;
}());
MapStyleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], MapStyleService);
exports.MapStyleService = MapStyleService;
//# sourceMappingURL=map-style.service.js.map