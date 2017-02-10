webpackJsonpac__name_([3],{

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var solicitudes_routing_1 = __webpack_require__(1406);
var SolicitudesModule = (function () {
    function SolicitudesModule() {
    }
    return SolicitudesModule;
}());
SolicitudesModule = __decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            solicitudes_routing_1.routing,
        ],
        providers: [],
        entryComponents: []
    }),
    __metadata("design:paramtypes", [])
], SolicitudesModule);
exports.SolicitudesModule = SolicitudesModule;


/***/ }),

/***/ 1406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(36);
exports.routes = [
    {
        path: 'sdrl',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(8).then((function (require) { resolve(__webpack_require__(1404)['SdrlModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Sociedad de Responsabilidad Limitada' }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ })

});
//# sourceMappingURL=3.map