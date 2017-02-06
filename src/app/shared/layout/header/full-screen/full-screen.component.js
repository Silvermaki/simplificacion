"use strict";
var core_1 = require("@angular/core");
var FullScreenComponent = (function () {
    function FullScreenComponent() {
    }
    FullScreenComponent.prototype.ngOnInit = function () {
    };
    FullScreenComponent.prototype.onToggle = function () {
        var $body = $('body');
        var documentMethods = {
            enter: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
            exit: ['cancelFullScreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msCancelFullScreen']
        };
        if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            document.documentElement[documentMethods.enter.filter(function (method) {
                return document.documentElement[method];
            })[0]]();
        }
        else {
            $body.removeClass("full-screen");
            document[documentMethods.exit.filter(function (method) {
                return document[method];
            })[0]]();
        }
    };
    return FullScreenComponent;
}());
FullScreenComponent = __decorate([
    core_1.Component({
        selector: 'sa-full-screen',
        templateUrl: './full-screen.component.html'
    }),
    __metadata("design:paramtypes", [])
], FullScreenComponent);
exports.FullScreenComponent = FullScreenComponent;
//# sourceMappingURL=full-screen.component.js.map