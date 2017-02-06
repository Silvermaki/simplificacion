"use strict";
var core_1 = require("@angular/core");
var chat_service_1 = require("../chat.service");
var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.users = [];
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getChatState().subscribe(function (state) {
            _this.users = state.users;
            _this.messages = state.messages;
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        templateUrl: './chat.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map