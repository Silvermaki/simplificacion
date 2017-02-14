"use strict";
var router_1 = require("@angular/router");
var agregar_personas_component_1 = require("./agregar-personas/agregar-personas.component");
var ver_personas_component_1 = require("./ver-personas/ver-personas.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'agregar'
    },
    {
        path: 'agregar',
        component: agregar_personas_component_1.AgregarPersonasComponent,
        data: { pageTitle: 'Agregar Personas' }
    },
    {
        path: 'ver',
        component: ver_personas_component_1.VerPersonasComponent,
        data: { pageTitle: 'Visualizar Personas' }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=personas.routing.js.map