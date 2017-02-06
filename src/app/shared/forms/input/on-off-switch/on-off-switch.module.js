"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var on_off_switch_component_1 = require("./on-off-switch.component");
var forms_1 = require("@angular/forms");
var OnOffSwitchModule = (function () {
    function OnOffSwitchModule() {
    }
    return OnOffSwitchModule;
}());
OnOffSwitchModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule
        ],
        declarations: [on_off_switch_component_1.OnOffSwitchComponent],
        exports: [on_off_switch_component_1.OnOffSwitchComponent]
    })
], OnOffSwitchModule);
exports.OnOffSwitchModule = OnOffSwitchModule;
//# sourceMappingURL=on-off-switch.module.js.map