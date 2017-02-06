"use strict";
var core_1 = require("@angular/core");
var smartadmin_config_1 = require("../smartadmin.config");
var commands_help_component_1 = require("./commands-help.component");
var sound_service_1 = require("../sound/sound.service");
var speech_recognition_api_1 = require("./speech-recognition.api");
var voice_recognition_service_1 = require("./voice-recognition.service");
var notification_service_1 = require("../utils/notification.service");
var body_service_1 = require("../utils/body.service");
var router_1 = require("@angular/router");
var layout_service_1 = require("../layout/layout.service");
var VoiceControlService = VoiceControlService_1 = (function () {
    function VoiceControlService(componentFactoryResolver, app, soundService, voiceRecognitionService, notificationService, bodyService, router, layoutService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.app = app;
        this.soundService = soundService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.notificationService = notificationService;
        this.bodyService = bodyService;
        this.router = router;
        this.layoutService = layoutService;
        this.state = {
            enabled: !!smartadmin_config_1.config.voice_command,
            available: false,
            autoStart: !!smartadmin_config_1.config.voice_command_auto,
            localStorage: !!smartadmin_config_1.config.voice_localStorage,
            lang: smartadmin_config_1.config.voice_command_lang,
            started: false,
        };
        this.helpShown = new core_1.EventEmitter();
        this.state.available = !!speech_recognition_api_1.SpeechRecognition;
        if (smartadmin_config_1.config.voice_command_auto) {
            this.voiceControlOn();
        }
        this.voiceRecognitionService.events.subscribe(function (event) {
            switch (event.type) {
                case 'start':
                    _this.bodyService.removeClass("service-not-allowed");
                    _this.bodyService.addClass("service-allowed");
                    break;
                case 'error':
                    _this.bodyService.removeClass("service-allowed");
                    _this.bodyService.addClass("service-not-allowed");
                    break;
                case 'match':
                    _this.notificationService.smallBox({
                        title: event.payload,
                        content: "loading...",
                        color: "#333",
                        sound_file: 'voice_alert',
                        timeout: 2000
                    });
                    break;
                case 'no match':
                    _this.notificationService.smallBox({
                        title: "Error: <strong>" + ' " ' + event.payload + ' " ' + "</strong> no match found!",
                        content: "Please speak clearly into the microphone",
                        color: "#a90329",
                        timeout: 5000,
                        icon: "fa fa-microphone"
                    });
                    break;
                case 'action':
                    _this.respondToAction(event);
                    break;
            }
        });
    }
    VoiceControlService.prototype.attachHelp = function () {
        if (this.state.available && !VoiceControlService_1.helpModal) {
            var component = this.componentFactoryResolver.resolveComponentFactory(commands_help_component_1.CommandsHelpComponent);
            var viewContainerRef = this.app['_rootComponents'][0]._component.viewContainerRef;
            VoiceControlService_1.helpModal = viewContainerRef.createComponent(component, viewContainerRef.length);
        }
    };
    VoiceControlService.prototype.showHelp = function () {
        var _this = this;
        setTimeout(function () {
            // debugger
            VoiceControlService_1.helpModal._component.show();
            _this.helpShown.next(true);
        }, 50);
    };
    VoiceControlService.prototype.hideHelp = function () {
        VoiceControlService_1.helpModal && VoiceControlService_1.helpModal._component.hide();
    };
    VoiceControlService.prototype.voiceControlOn = function () {
        this.soundService.play('voice_on');
        if (!this.voiceRecognitionService.commandsList.length) {
            this.voiceRecognitionService.addCommands(smartadmin_config_1.config.voice_commands);
        }
        this.voiceRecognitionService.start();
        this.state.started = true;
        this.bodyService.addClass('voice-command-active');
    };
    VoiceControlService.prototype.voiceControlOff = function () {
        this.soundService.play('voice_off');
        this.voiceRecognitionService.abort();
        this.state.started = false;
        this.bodyService.removeClass('voice-command-active');
    };
    VoiceControlService.prototype.respondToAction = function (action) {
        switch (action.actionType) {
            case 'voice':
                switch (action.payload) {
                    case 'help on':
                        this.showHelp();
                        break;
                    case 'help off':
                        this.hideHelp();
                        break;
                    case 'stop':
                        this.voiceControlOff();
                        this.notificationService.smallBox({
                            title: "VOICE COMMAND OFF",
                            content: "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                            color: "#40ac2b",
                            sound_file: 'voice_off',
                            timeout: 8000,
                            icon: "fa fa-microphone-slash"
                        });
                        break;
                }
                break;
            case 'navigate':
                this.router.navigate(action.payload);
                break;
            case 'layout':
                switch (action.payload) {
                    case 'show navigation':
                        this.layoutService.onCollapseMenu(false);
                        break;
                    case 'hide navigation':
                        this.layoutService.onCollapseMenu(true);
                        break;
                }
                break;
            case 'sound':
                switch (action.payload) {
                    case 'mute':
                        this.soundService.mute();
                        break;
                    case 'sound on':
                        this.soundService.soundOn();
                        break;
                }
                break;
        }
    };
    return VoiceControlService;
}());
VoiceControlService = VoiceControlService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.ApplicationRef,
        sound_service_1.SoundService,
        voice_recognition_service_1.VoiceRecognitionService,
        notification_service_1.NotificationService,
        body_service_1.BodyService,
        router_1.Router,
        layout_service_1.LayoutService])
], VoiceControlService);
exports.VoiceControlService = VoiceControlService;
var VoiceControlService_1;
//# sourceMappingURL=voice-control.service.js.map