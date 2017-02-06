"use strict";
var core_1 = require("@angular/core");
var chat_service_1 = require("../chat.service");
var ChatBodyComponent = (function () {
    function ChatBodyComponent(chatService, el) {
        this.chatService = chatService;
        this.el = el;
    }
    ChatBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.newMessage.subscribe(function (message) {
            _this.messages.push(message);
            _this.scrollDown();
        });
    };
    ChatBodyComponent.prototype.messageTo = function (user) {
        this.chatService.messageTo(user);
    };
    ChatBodyComponent.prototype.scrollDown = function () {
        var $body = $('#chat-body', this.el.nativeElement);
        $body.animate({ scrollTop: $body[0].scrollHeight });
    };
    return ChatBodyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ChatBodyComponent.prototype, "messages", void 0);
ChatBodyComponent = __decorate([
    core_1.Component({
        selector: 'chat-body',
        templateUrl: './chat-body.component.html',
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService, core_1.ElementRef])
], ChatBodyComponent);
exports.ChatBodyComponent = ChatBodyComponent;
//# sourceMappingURL=chat-body.component.js.map