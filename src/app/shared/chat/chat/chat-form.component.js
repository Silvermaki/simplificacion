"use strict";
var core_1 = require("@angular/core");
var chat_service_1 = require("../chat.service");
var user_service_1 = require("../../user/user.service");
var ChatFormComponent = (function () {
    function ChatFormComponent(chatService, userService) {
        this.chatService = chatService;
        this.userService = userService;
        this.message = '';
        this.enterToSend = false;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.messageToSubject.subscribe(function (user) {
            _this.message += (user.username + ', ');
        });
        this.user = this.userService.userInfo;
        this.userService.user.subscribe(function (user) {
            _this.user = user;
        });
    };
    ChatFormComponent.prototype.sendMessage = function () {
        if (this.message.trim() == '')
            return;
        this.chatService.sendMessage({
            body: this.message,
            user: this.user,
            date: new Date()
        });
        this.message = '';
    };
    ChatFormComponent.prototype.sendMessageEnter = function () {
        if (this.enterToSend) {
            this.sendMessage();
        }
    };
    return ChatFormComponent;
}());
ChatFormComponent = __decorate([
    core_1.Component({
        selector: 'chat-form',
        templateUrl: './chat-form.component.html',
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService, user_service_1.UserService])
], ChatFormComponent);
exports.ChatFormComponent = ChatFormComponent;
//# sourceMappingURL=chat-form.component.js.map