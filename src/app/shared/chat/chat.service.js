"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var json_api_service_1 = require("../../core/api/json-api.service");
var ChatService = (function () {
    function ChatService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.url = '/chat/chat.json';
        this.messageToSubject = new Rx_1.Subject();
        this.newMessage = new Rx_1.Subject();
    }
    ChatService.prototype.getChatState = function () {
        return this.jsonApiService.fetch(this.url);
    };
    ChatService.prototype.messageTo = function (user) {
        this.messageToSubject.next(user);
    };
    ChatService.prototype.sendMessage = function (message) {
        this.newMessage.next(message);
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map