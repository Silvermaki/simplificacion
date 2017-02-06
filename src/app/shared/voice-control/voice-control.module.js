"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var sound_module_1 = require("../sound/sound.module");
var utils_module_1 = require("../utils/utils.module");
var voice_control_service_1 = require("./voice-control.service");
var commands_help_component_1 = require("./commands-help.component");
var voice_recognition_service_1 = require("./voice-recognition.service");
var VoiceControlModule = VoiceControlModule_1 = (function () {
    function VoiceControlModule() {
    }
    VoiceControlModule.forRoot = function () {
        return {
            ngModule: VoiceControlModule_1,
            providers: [voice_control_service_1.VoiceControlService, voice_recognition_service_1.VoiceRecognitionService]
        };
    };
    return VoiceControlModule;
}());
VoiceControlModule = VoiceControlModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, ng2_bootstrap_1.ModalModule, sound_module_1.SoundModule, utils_module_1.UtilsModule
        ],
        exports: [commands_help_component_1.CommandsHelpComponent],
        declarations: [commands_help_component_1.CommandsHelpComponent],
        providers: [voice_control_service_1.VoiceControlService, voice_recognition_service_1.VoiceRecognitionService],
        entryComponents: [commands_help_component_1.CommandsHelpComponent]
    })
], VoiceControlModule);
exports.VoiceControlModule = VoiceControlModule;
var VoiceControlModule_1;
//# sourceMappingURL=voice-control.module.js.map