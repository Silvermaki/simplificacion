"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var header_module_1 = require("./header/header.module");
var footer_component_1 = require("./footer/footer.component");
var navigation_module_1 = require("./navigation/navigation.module");
var ribbon_component_1 = require("./ribbon/ribbon.component");
var shortcut_component_1 = require("./shortcut/shortcut.component");
var layout_switcher_component_1 = require("./layout-switcher.component");
var main_layout_component_1 = require("./app-layouts/main-layout.component");
var empty_layout_component_1 = require("./app-layouts/empty-layout.component");
var router_1 = require("@angular/router");
var auth_layout_component_1 = require("./app-layouts/auth-layout.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var route_breadcrumbs_component_1 = require("./ribbon/route-breadcrumbs.component");
var utils_module_1 = require("../utils/utils.module");
var SmartadminLayoutModule = (function () {
    function SmartadminLayoutModule() {
    }
    return SmartadminLayoutModule;
}());
SmartadminLayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            header_module_1.HeaderModule,
            navigation_module_1.NavigationModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            utils_module_1.UtilsModule,
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_1.DropdownModule.forRoot(),
        ],
        declarations: [
            footer_component_1.FooterComponent,
            ribbon_component_1.RibbonComponent,
            shortcut_component_1.ShortcutComponent,
            layout_switcher_component_1.LayoutSwitcherComponent,
            main_layout_component_1.MainLayoutComponent,
            empty_layout_component_1.EmptyLayoutComponent,
            auth_layout_component_1.AuthLayoutComponent,
            route_breadcrumbs_component_1.RouteBreadcrumbsComponent,
        ],
        exports: [
            header_module_1.HeaderModule,
            navigation_module_1.NavigationModule,
            footer_component_1.FooterComponent,
            ribbon_component_1.RibbonComponent,
            shortcut_component_1.ShortcutComponent,
            layout_switcher_component_1.LayoutSwitcherComponent,
        ]
    })
], SmartadminLayoutModule);
exports.SmartadminLayoutModule = SmartadminLayoutModule;
//# sourceMappingURL=layout.module.js.map