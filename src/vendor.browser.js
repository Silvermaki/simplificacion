// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
"use strict";
// TODO(gdi2290): switch to DLLs
// Angular 2
require("@angular/platform-browser");
require("@angular/platform-browser-dynamic");
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");
// AngularClass
require("@angularclass/hmr");
// RxJS
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
// Smartadmin Dependencies
window['jQuery'] = require('jquery');
window['$'] = window['jQuery'];
require("jquery-ui-npm/jquery-ui.min.js");
require('bootstrap/js/tooltip.js'); // required for X-editable
require('bootstrap/js/popover.js'); // required for X-editable
require('bootstrap/js/dropdown.js'); // required for bootstrap-colorpicker
require('bootstrap/js/tab.js'); //
require('bootstrap/js/modal.js'); //
window['moment'] = require('moment');
require("imports-loader?jQuery=jquery!jquery-color/jquery.color.js");
require('smartadmin-plugins/notification/SmartNotification.min.js');
if ('production' === ENV) {
}
else {
}
//# sourceMappingURL=vendor.browser.js.map