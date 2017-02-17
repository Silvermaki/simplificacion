"use strict";
var solicitudes_component_1 = require("./solicitudes.component");
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: '',
        component: solicitudes_component_1.SolicitudesComponent,
        data: { pageTitle: 'Solicitudes' }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=solicitudes.routing.js.map