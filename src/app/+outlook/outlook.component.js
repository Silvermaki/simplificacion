"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var outlook_1 = require("./shared/outlook");
var outlook_service_1 = require("./shared/outlook.service");
var fade_in_top_decorator_1 = require("../shared/animations/fade-in-top.decorator");
var OutlookComponent = (function () {
    function OutlookComponent(route, router, outlookService) {
        this.route = route;
        this.router = router;
        this.outlookService = outlookService;
        this.outlook = new outlook_1.Outlook();
        this.activeFolder = new outlook_1.Folder();
    }
    OutlookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outlookSub = this.outlookService.getOutlook().subscribe(function (outlook) {
            _this.outlook = outlook;
        });
        this.activeFolderSub = this.outlookService.activeFolder.subscribe(function (folder) {
            _this.activeFolderKey = folder;
            if (_this.outlook.folders) {
                _this.activeFolder = _this.outlook.folders.find(function (it) { return it.key == folder; });
            }
        });
    };
    OutlookComponent.prototype.ngOnDestroy = function () {
        this.outlookSub.unsubscribe();
        this.activeFolderSub.unsubscribe();
    };
    OutlookComponent.prototype.deleteSelected = function () {
        this.outlookService.deleteSelected();
    };
    return OutlookComponent;
}());
OutlookComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-outlook',
        templateUrl: './outlook.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        outlook_service_1.OutlookService])
], OutlookComponent);
exports.OutlookComponent = OutlookComponent;
//# sourceMappingURL=outlook.component.js.map