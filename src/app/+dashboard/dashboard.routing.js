"use strict";
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: '', redirectTo: 'analytics', pathMatch: 'full'
    },
    {
        path: 'analytics',
        loadChildren: function () { return System.import('./+analytics/analytics.module')
            .then(function (imports) { return imports.AnalyticsModule; }); }
    },
    {
        path: 'social',
        loadChildren: function () { return System.import('./+social/social.module')
            .then(function (imports) { return imports.SocialModule; }); }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=dashboard.routing.js.map