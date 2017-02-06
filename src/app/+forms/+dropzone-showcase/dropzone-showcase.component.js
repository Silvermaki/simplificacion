"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var DropzoneShowcaseComponent = (function () {
    function DropzoneShowcaseComponent() {
    }
    DropzoneShowcaseComponent.prototype.ngOnInit = function () {
    };
    return DropzoneShowcaseComponent;
}());
DropzoneShowcaseComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-dropzone-showcase',
        templateUrl: './dropzone-showcase.component.html',
    }),
    __metadata("design:paramtypes", [])
], DropzoneShowcaseComponent);
exports.DropzoneShowcaseComponent = DropzoneShowcaseComponent;
//# sourceMappingURL=dropzone-showcase.component.js.map