"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var outlook_service_1 = require("../shared/outlook.service");
var FolderComponent = (function () {
    function FolderComponent(route, router, outlookService) {
        this.route = route;
        this.router = router;
        this.outlookService = outlookService;
    }
    FolderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeFolderSub = this.route.params.subscribe(function (params) {
            var folder = params['folder'];
            _this.outlookService.getMessages(folder);
        });
        this.outlookService.messages.subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    FolderComponent.prototype.ngOnDestroy = function () {
        this.activeFolderSub.unsubscribe();
    };
    return FolderComponent;
}());
FolderComponent = __decorate([
    core_1.Component({
        selector: 'sa-folder',
        templateUrl: './folder.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        outlook_service_1.OutlookService])
], FolderComponent);
exports.FolderComponent = FolderComponent;
//# sourceMappingURL=folder.component.js.map