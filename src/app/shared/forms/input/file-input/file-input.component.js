"use strict";
var core_1 = require("@angular/core");
var FileInputComponent = (function () {
    function FileInputComponent() {
    }
    FileInputComponent.prototype.ngOnInit = function () {
    };
    return FileInputComponent;
}());
FileInputComponent = __decorate([
    core_1.Component({
        selector: 'sa-file-input',
        template: "\n    <div class=\"input input-file\">\n        <span class=\"button\"><input type=\"file\" #file  (change)=\"viewport.value = file.value\"/>Browse</span><input #viewport type=\"text\" placeholder=\"Include some files\" readonly/>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], FileInputComponent);
exports.FileInputComponent = FileInputComponent;
//# sourceMappingURL=file-input.component.js.map