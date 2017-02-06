"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forum_routing_module_1 = require("./forum-routing.module");
var ForumModule = (function () {
    function ForumModule() {
    }
    return ForumModule;
}());
ForumModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forum_routing_module_1.ForumRoutingModule
        ],
    })
], ForumModule);
exports.ForumModule = ForumModule;
//# sourceMappingURL=forum.module.js.map