"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dropzone_showcase_routing_1 = require("./dropzone-showcase.routing");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var dropzone_module_1 = require("../../shared/forms/dropzone/dropzone.module");
var dropzone_showcase_component_1 = require("./dropzone-showcase.component");
var DropzoneShowcaseModule = (function () {
    function DropzoneShowcaseModule() {
    }
    return DropzoneShowcaseModule;
}());
DropzoneShowcaseModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dropzone_showcase_routing_1.dropzoneShowcaseRouting,
            smartadmin_module_1.SmartadminModule,
            dropzone_module_1.DropzoneModule
        ],
        declarations: [dropzone_showcase_component_1.DropzoneShowcaseComponent]
    })
], DropzoneShowcaseModule);
exports.DropzoneShowcaseModule = DropzoneShowcaseModule;
//# sourceMappingURL=dropzone-showcase.module.js.map