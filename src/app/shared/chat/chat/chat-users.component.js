"use strict";
var core_1 = require("@angular/core");
var chat_service_1 = require("../chat.service");
var ChatUsersComponent = (function () {
    function ChatUsersComponent(chatService) {
        this.chatService = chatService;
        this.filter = '';
        this.isOpen = false;
    }
    ChatUsersComponent.prototype.openToggle = function () {
        this.isOpen = !this.isOpen;
    };
    ChatUsersComponent.prototype.messageTo = function (user) {
        this.chatService.messageTo(user);
    };
    ChatUsersComponent.prototype.ngOnInit = function () {
    };
    return ChatUsersComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ChatUsersComponent.prototype, "users", void 0);
ChatUsersComponent = __decorate([
    core_1.Component({
        selector: 'chat-users',
        templateUrl: './chat-users.component.html',
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatUsersComponent);
exports.ChatUsersComponent = ChatUsersComponent;
//# sourceMappingURL=chat-users.component.js.map