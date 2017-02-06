"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var ImageEditorComponent = (function () {
    function ImageEditorComponent() {
    }
    ImageEditorComponent.prototype.ngOnInit = function () {
    };
    return ImageEditorComponent;
}());
ImageEditorComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-image-editor',
        templateUrl: './image-editor.component.html',
    }),
    __metadata("design:paramtypes", [])
], ImageEditorComponent);
exports.ImageEditorComponent = ImageEditorComponent;
//# sourceMappingURL=image-editor.component.js.map