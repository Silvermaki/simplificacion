webpackJsonpac__name_([2],{

/***/ 1306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var auth_routing_1 = __webpack_require__(1378);
var auth_component_1 = __webpack_require__(1377);
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            auth_routing_1.routing,
        ],
        declarations: [auth_component_1.AuthComponent]
    }),
    __metadata("design:paramtypes", [])
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ 1377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: 'app-auth',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);
exports.AuthComponent = AuthComponent;


/***/ }),

/***/ 1378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(36);
exports.routes = [
    {
        path: '',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: function () { return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 1374)).then(function (m) { return m.LoginModule; }); }
    },
    {
        path: 'register',
        loadChildren: function () { return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 1376)).then(function (m) { return m.RegisterModule; }); }
    },
    {
        path: 'forgot-password',
        loadChildren: function () { return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 1372)).then(function (m) { return m.ForgotModule; }); }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ })

});
//# sourceMappingURL=2.map