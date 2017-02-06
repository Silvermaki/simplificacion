"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var sound_service_1 = require("./sound.service");
var SoundModule = SoundModule_1 = (function () {
    function SoundModule() {
    }
    SoundModule.forRoot = function () {
        return {
            ngModule: SoundModule_1,
            providers: [sound_service_1.SoundService]
        };
    };
    return SoundModule;
}());
SoundModule = SoundModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [],
        providers: [sound_service_1.SoundService]
    })
], SoundModule);
exports.SoundModule = SoundModule;
var SoundModule_1;
//# sourceMappingURL=sound.module.js.map