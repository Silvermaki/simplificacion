"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var icons_routing_1 = require("./icons.routing");
var font_awesome_component_1 = require("./+font-awesome/font-awesome.component");
var flags_component_1 = require("./+flags/flags.component");
var glyphicons_component_1 = require("./+glyphicons/glyphicons.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var IconsModule = (function () {
    function IconsModule() {
    }
    return IconsModule;
}());
IconsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            icons_routing_1.iconsRouting,
            smartadmin_module_1.SmartadminModule
        ],
        declarations: [flags_component_1.FlagsComponent, font_awesome_component_1.FontAwesomeComponent, glyphicons_component_1.GlyphiconsComponent]
    })
], IconsModule);
exports.IconsModule = IconsModule;
//# sourceMappingURL=icons.module.js.map