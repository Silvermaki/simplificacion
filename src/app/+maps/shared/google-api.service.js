"use strict";
var core_1 = require("@angular/core");
var smartadmin_config_1 = require("../../shared/smartadmin.config");
var url = 'https://maps.googleapis.com/maps/api/js?key=' + smartadmin_config_1.config.GOOGLE_API_KEY + '&callback=__onGoogleLoaded';
var GoogleAPIService = (function () {
    function GoogleAPIService() {
        var _this = this;
        if (window['google']) {
            this.loadAPI = Promise.resolve(window['google']);
        }
        else {
            this.loadAPI = new Promise(function (resolve) {
                window['__onGoogleLoaded'] = function (ev) {
                    console.log('google.maps loaded');
                    resolve(window['google']);
                };
                _this.loadScript();
            });
        }
    }
    GoogleAPIService.prototype.loadScript = function () {
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    return GoogleAPIService;
}());
GoogleAPIService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GoogleAPIService);
exports.GoogleAPIService = GoogleAPIService;
//# sourceMappingURL=google-api.service.js.map