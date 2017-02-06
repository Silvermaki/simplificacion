"use strict";
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: '',
        redirectTo: 'blank'
    },
    {
        path: 'blank',
        loadChildren: function () { return System.import('./+blank/blank.module').then(function (m) { return m.BlankModule; }); }
    },
    {
        path: 'ckeditor',
        loadChildren: function () { return System.import('./+ckeditor/ckeditor.module').then(function (m) { return m.CkeditorModule; }); }
    },
    {
        path: 'email-template',
        loadChildren: function () { return System.import('./+email-template/email-template.module').then(function (m) { return m.EmailTemplateModule; }); }
    },
    {
        path: 'error404',
        loadChildren: function () { return System.import('./+error404/error404.module').then(function (m) { return m.Error404Module; }); }
    },
    {
        path: 'error500',
        loadChildren: function () { return System.import('./+error500/error500.module').then(function (m) { return m.Error500Module; }); }
    },
    {
        path: 'invoice',
        loadChildren: function () { return System.import('./+invoice/invoice.module').then(function (m) { return m.InvoiceModule; }); }
    },
    {
        path: 'pricing-tables',
        loadChildren: function () { return System.import('./+pricing-tables/pricing-tables.module').then(function (m) { return m.PricingTablesModule; }); }
    },
    {
        path: 'search',
        loadChildren: function () { return System.import('./+search/search.module').then(function (m) { return m.SearchModule; }); }
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=miscellaneous.routing.js.map