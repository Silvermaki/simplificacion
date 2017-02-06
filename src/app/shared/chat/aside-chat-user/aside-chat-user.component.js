"use strict";
var core_1 = require("@angular/core");
var aside_chat_boxes_1 = require("../aside-chat/aside-chat-boxes");
var AsideChatUserComponent = AsideChatUserComponent_1 = (function () {
    function AsideChatUserComponent() {
        this.user = {};
        this.state = {
            chatId: 'chatbox-user-' + AsideChatUserComponent_1.idCounter++
        };
    }
    AsideChatUserComponent.prototype.ngOnInit = function () {
    };
    AsideChatUserComponent.prototype.openChatBox = function (e) {
        e.preventDefault();
        var user = this.user;
        var _a = user.username.split(/ /), firstname = _a[0], lastname = _a[1];
        var id = this.state.chatId;
        if (user.status != 'ofline') {
            aside_chat_boxes_1.chatboxManager.addBox(id, {
                title: user.username,
                first_name: firstname,
                last_name: lastname,
                status: user.status || 'online',
                alertmsg: user.status == 'busy' ? user.username + ' is in a meeting. Please do not disturb!' : '',
                alertshow: user.status == 'busy'
            });
        }
    };
    return AsideChatUserComponent;
}());
AsideChatUserComponent.idCounter = 0;
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AsideChatUserComponent.prototype, "user", void 0);
AsideChatUserComponent = AsideChatUserComponent_1 = __decorate([
    core_1.Component({
        selector: 'aside-chat-user',
        templateUrl: './aside-chat-user.component.html',
    }),
    __metadata("design:paramtypes", [])
], AsideChatUserComponent);
exports.AsideChatUserComponent = AsideChatUserComponent;
var AsideChatUserComponent_1;
//# sourceMappingURL=aside-chat-user.component.js.map