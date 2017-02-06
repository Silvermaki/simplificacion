"use strict";
var core_1 = require("@angular/core");
var moment = require("moment");
var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, format) {
        return moment(value).format(format);
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    core_1.Pipe({
        name: 'moment'
    })
], MomentPipe);
exports.MomentPipe = MomentPipe;
//# sourceMappingURL=moment.pipe.js.map