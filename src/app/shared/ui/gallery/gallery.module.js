"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var gallery_component_1 = require("./gallery.component");
var SmartadminGalleryModule = (function () {
    function SmartadminGalleryModule() {
    }
    return SmartadminGalleryModule;
}());
SmartadminGalleryModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [gallery_component_1.GalleryComponent],
        exports: [gallery_component_1.GalleryComponent],
    })
], SmartadminGalleryModule);
exports.SmartadminGalleryModule = SmartadminGalleryModule;
//# sourceMappingURL=gallery.module.js.map