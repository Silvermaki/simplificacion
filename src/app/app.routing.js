"use strict";
var router_1 = require("@angular/router");
var main_layout_component_1 = require("./shared/layout/app-layouts/main-layout.component");
var auth_layout_component_1 = require("./shared/layout/app-layouts/auth-layout.component");
exports.routes = [
    {
        path: '',
        component: auth_layout_component_1.AuthLayoutComponent,
        loadChildren: 'app/+auth/auth.module#AuthModule',
        data: { pageTitle: 'MiEmpresaEnLínea' }
    },
    {
        path: 'principal',
        component: main_layout_component_1.MainLayoutComponent,
        data: { pageTitle: 'Principal' },
        children: [
            {
                path: '', redirectTo: 'solicitudes', pathMatch: 'full'
            },
            {
                path: 'correo',
                loadChildren: 'app/+outlook/outlook.module#OutlookModule',
                data: { pageTitle: 'Correo' }
            },
            {
                path: 'solicitudes',
                loadChildren: 'app/+solicitudes/solicitudes.module#SolicitudesModule',
                data: { pageTitle: 'Solicitudes' }
            },
            {
                path: 'personas',
                loadChildren: 'app/+personas/personas.module#PersonasModule',
                data: { pageTitle: 'Personas' }
            }
        ]
    },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map