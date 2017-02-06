"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var outlook_message_class_1 = require("./outlook-message.class");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var json_api_service_1 = require("../../core/api/json-api.service");
var OutlookService = (function () {
    function OutlookService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.state = {
            lastFolder: '',
            messages: []
        };
        this.activeFolder = new Rx_1.Subject();
        this.messages = new Rx_1.Subject();
    }
    OutlookService.prototype.getOutlook = function () {
        return this.jsonApiService.fetch('/outlook/outlook.json');
    };
    OutlookService.prototype.getMessages = function (folder) {
        var _this = this;
        this.jsonApiService.fetch('/outlook/' + folder + '.json')
            .map(this.mapToMessages)
            .do(function (data) {
            _this.state.lastFolder = folder;
            _this.state.messages = data;
            _this.activeFolder.next(folder);
            _this.messages.next(_this.state.messages);
            return data;
        })
            .subscribe();
    };
    OutlookService.prototype.getMessage = function (id) {
        return this.jsonApiService.fetch('/outlook/message.json');
    };
    OutlookService.prototype.deleteSelected = function () {
        this.messages.next(this.state.messages.filter(function (it) { return !it.selected; }));
    };
    OutlookService.prototype.mapToMessages = function (rawMessages) {
        return rawMessages.map(function (it) { return new outlook_message_class_1.OutlookMessage(it); });
    };
    return OutlookService;
}());
OutlookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], OutlookService);
exports.OutlookService = OutlookService;
//# sourceMappingURL=outlook.service.js.map