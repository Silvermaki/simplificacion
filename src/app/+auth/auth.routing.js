"use strict";
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: '',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: function () { return System.import('./+login/login.module').then(function (m) { return m.LoginModule; }); }
    },
    {
        path: 'register',
        loadChildren: function () { return System.import('./+register/register.module').then(function (m) { return m.RegisterModule; }); }
    },
    {
        path: 'forgot-password',
        loadChildren: function () { return System.import('./+forgot/forgot.module').then(function (m) { return m.ForgotModule; }); }
    },
    {
        path: 'locked',
        loadChildren: function () { return System.import('./+locked/locked.module').then(function (m) { return m.LockedModule; }); }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=auth.routing.js.map