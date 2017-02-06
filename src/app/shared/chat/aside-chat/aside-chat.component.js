"use strict";
var core_1 = require("@angular/core");
var chat_service_1 = require("../chat.service");
var AsideChatComponent = (function () {
    function AsideChatComponent(chatService) {
        this.chatService = chatService;
        this.users = [];
        this.state = {
            open: false,
            filter: ''
        };
    }
    AsideChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getChatState().subscribe(function (state) {
            _this.users = state.users.map(function (it) {
                it.visible = true;
                return it;
            });
        });
    };
    AsideChatComponent.prototype.onFilter = function () {
        var _this = this;
        this.users.forEach(function (it) {
            if (!_this.state.filter) {
                it.visible = true;
            }
            else {
                it.visible = it.username.toLowerCase().indexOf(_this.state.filter.toLocaleLowerCase()) > -1;
            }
        });
    };
    AsideChatComponent.prototype.openToggle = function (e) {
        this.state.open = !this.state.open;
        $(this.chatUsersList.nativeElement).slideToggle();
        e.preventDefault();
    };
    return AsideChatComponent;
}());
__decorate([
    core_1.ViewChild('chatUsersList'),
    __metadata("design:type", Object)
], AsideChatComponent.prototype, "chatUsersList", void 0);
AsideChatComponent = __decorate([
    core_1.Component({
        selector: 'aside-chat',
        templateUrl: './aside-chat.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], AsideChatComponent);
exports.AsideChatComponent = AsideChatComponent;
//# sourceMappingURL=aside-chat.component.js.map