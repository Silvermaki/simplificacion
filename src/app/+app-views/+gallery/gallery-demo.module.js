"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var gallery_demo_routing_module_1 = require("./gallery-demo-routing.module");
var gallery_demo_component_1 = require("./gallery-demo.component");
var gallery_module_1 = require("../../shared/ui/gallery/gallery.module");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var GalleryDemoModule = (function () {
    function GalleryDemoModule() {
    }
    return GalleryDemoModule;
}());
GalleryDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            gallery_demo_routing_module_1.GalleryDemoRoutingModule,
            gallery_module_1.SmartadminGalleryModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [gallery_demo_component_1.GalleryDemoComponent]
    })
], GalleryDemoModule);
exports.GalleryDemoModule = GalleryDemoModule;
//# sourceMappingURL=gallery-demo.module.js.map