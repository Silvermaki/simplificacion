"use strict";
var core_1 = require("@angular/core");
var voice_control_service_1 = require("../../../voice-control/voice-control.service");
var voice_recognition_service_1 = require("../../../voice-control/voice-recognition.service");
var SpeechButtonComponent = (function () {
    function SpeechButtonComponent(voiceControlService, voiceRecognitionService) {
        var _this = this;
        this.voiceControlService = voiceControlService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.hasError = false;
        this.enabled = false;
        this.speechPopoverShown = false;
        this.enabled = this.voiceControlService.state.enabled && this.voiceControlService.state.available;
        this.voiceRecognitionService.events.delay(50).subscribe(function (event) {
            _this.respondTo(event);
        });
        this.voiceControlService.helpShown.delay(50).subscribe(function () {
            if (_this.speechPopoverShown) {
                _this.speechPopover.hide();
            }
        });
    }
    SpeechButtonComponent.prototype.ngOnInit = function () {
        this.voiceControlService.attachHelp();
    };
    SpeechButtonComponent.prototype.seeCommands = function () {
        this.voiceControlService.showHelp();
    };
    SpeechButtonComponent.prototype.toggleVoiceControl = function () {
        this.speechPopoverShown = !this.speechPopoverShown;
        if (!this.voiceControlService.state.started) {
            this.voiceControlService.voiceControlOn();
        }
        else {
            this.voiceControlService.voiceControlOff();
        }
    };
    SpeechButtonComponent.prototype.respondTo = function (event) {
        switch (event.type) {
            case 'start':
                this.hasError = false;
                break;
            case 'error':
                this.hasError = true;
                break;
            case 'match':
            case 'no match':
                if (this.speechPopoverShown) {
                    this.speechPopover.hide();
                }
                break;
        }
    };
    return SpeechButtonComponent;
}());
__decorate([
    core_1.ViewChild('speechPopover'),
    __metadata("design:type", Object)
], SpeechButtonComponent.prototype, "speechPopover", void 0);
SpeechButtonComponent = __decorate([
    core_1.Component({
        selector: 'sa-speech-button',
        templateUrl: './speech-button.component.html',
        styles: [".vc-title-error {display: block;}"]
    }),
    __metadata("design:paramtypes", [voice_control_service_1.VoiceControlService,
        voice_recognition_service_1.VoiceRecognitionService])
], SpeechButtonComponent);
exports.SpeechButtonComponent = SpeechButtonComponent;
//# sourceMappingURL=speech-button.component.js.map