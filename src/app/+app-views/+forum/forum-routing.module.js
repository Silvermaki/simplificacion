"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'general-view',
        loadChildren: function () { return System.import('./+general-view/general-view.module').then(function (m) { return m.GeneralViewModule; }); }
    },
    {
        path: 'post-view',
        loadChildren: function () { return System.import('./+post-view/post-view.module').then(function (m) { return m.PostViewModule; }); }
    },
    {
        path: 'topic-view',
        loadChildren: function () { return System.import('./+topic-view/topic-view.module').then(function (m) { return m.TopicViewModule; }); }
    },
];
var ForumRoutingModule = (function () {
    function ForumRoutingModule() {
    }
    return ForumRoutingModule;
}());
ForumRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], ForumRoutingModule);
exports.ForumRoutingModule = ForumRoutingModule;
//# sourceMappingURL=forum-routing.module.js.map