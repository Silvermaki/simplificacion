"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var json_api_service_1 = require("./api/json-api.service");
var layout_service_1 = require("../shared/layout/layout.service");
var user_service_1 = require("../shared/user/user.service");
var voice_control_service_1 = require("../shared/voice-control/voice-control.service");
var sound_service_1 = require("../shared/sound/sound.service");
var module_import_guard_1 = require("./guards/module-import-guard");
var voice_recognition_service_1 = require("../shared/voice-control/voice-recognition.service");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var CoreModule = (function () {
    function CoreModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_1.DropdownModule.forRoot(),
            ng2_bootstrap_1.ProgressbarModule.forRoot(),
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.TabsModule.forRoot(),
        ],
        declarations: [],
        providers: [
            json_api_service_1.JsonApiService,
            layout_service_1.LayoutService,
            user_service_1.UserService,
            voice_control_service_1.VoiceControlService,
            voice_recognition_service_1.VoiceRecognitionService,
            sound_service_1.SoundService,
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map