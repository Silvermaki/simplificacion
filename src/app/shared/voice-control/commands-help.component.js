"use strict";
var core_1 = require("@angular/core");
var CommandsHelpComponent = (function () {
    function CommandsHelpComponent() {
    }
    CommandsHelpComponent.prototype.ngOnInit = function () {
    };
    CommandsHelpComponent.prototype.show = function () {
        this.seeCommandsModal.show();
    };
    CommandsHelpComponent.prototype.hide = function () {
        this.seeCommandsModal.hide();
    };
    return CommandsHelpComponent;
}());
__decorate([
    core_1.ViewChild('seeCommandsModal'),
    __metadata("design:type", Object)
], CommandsHelpComponent.prototype, "seeCommandsModal", void 0);
CommandsHelpComponent = __decorate([
    core_1.Component({
        selector: 'sa-commands-help',
        templateUrl: './commands-help.component.html',
        styles: [],
    }),
    __metadata("design:paramtypes", [])
], CommandsHelpComponent);
exports.CommandsHelpComponent = CommandsHelpComponent;
//# sourceMappingURL=commands-help.component.js.map