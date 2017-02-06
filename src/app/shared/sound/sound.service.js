"use strict";
var core_1 = require("@angular/core");
var smartadmin_config_1 = require("../smartadmin.config");
var notification_service_1 = require("../utils/notification.service");
var SoundService = SoundService_1 = (function () {
    function SoundService(notificationService) {
        this.notificationService = notificationService;
        this.config = {
            basePath: smartadmin_config_1.config.sound_path,
            mainExt: '.mp3',
            alternateExt: '.ogg',
        };
    }
    SoundService.prototype.get = function (name) {
        var _this = this;
        if (SoundService_1.cache[name]) {
            return Promise.resolve(SoundService_1.cache[name]);
        }
        else {
            return new Promise(function (resolve, reject) {
                var audioElement = document.createElement('audio');
                if (navigator.userAgent.match('Firefox/')) {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.alternateExt);
                }
                else {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.mainExt);
                }
                audioElement.addEventListener('error', reject);
                audioElement.load();
                SoundService_1.cache[name] = audioElement;
                resolve(audioElement);
            });
        }
    };
    SoundService.prototype.play = function (name) {
        if (smartadmin_config_1.config.sound_on) {
            this.get(name).then(function (audio) {
                audio.play();
            });
        }
    };
    SoundService.prototype.mute = function () {
        smartadmin_config_1.config.sound_on = false;
        this.notificationService.smallBox({
            title: "MUTE",
            content: "All sounds have been muted!",
            color: "#a90329",
            timeout: 4000,
            icon: "fa fa-volume-off"
        });
    };
    SoundService.prototype.soundOn = function () {
        smartadmin_config_1.config.sound_on = true;
        this.notificationService.smallBox({
            title: "UNMUTE",
            content: "All sounds have been turned on!",
            color: "#40ac2b",
            sound_file: 'voice_alert',
            timeout: 5000,
            icon: "fa fa-volume-up"
        });
    };
    return SoundService;
}());
SoundService.cache = {};
SoundService = SoundService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], SoundService);
exports.SoundService = SoundService;
var SoundService_1;
//# sourceMappingURL=sound.service.js.map