"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var i18n_module_1 = require("../../i18n/i18n.module");
var big_breadcrumbs_component_1 = require("./big-breadcrumbs.component");
var minify_menu_component_1 = require("./minify-menu.component");
var navigation_component_1 = require("./navigation.component");
var smart_menu_directive_1 = require("./smart-menu.directive");
var user_module_1 = require("../../user/user.module");
var router_1 = require("@angular/router");
var chat_module_1 = require("../../chat/chat.module");
var NavigationModule = (function () {
    function NavigationModule() {
    }
    return NavigationModule;
}());
NavigationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            i18n_module_1.I18nModule,
            user_module_1.UserModule,
            chat_module_1.ChatModule
        ],
        declarations: [
            big_breadcrumbs_component_1.BigBreadcrumbsComponent,
            minify_menu_component_1.MinifyMenuComponent,
            navigation_component_1.NavigationComponent,
            smart_menu_directive_1.SmartMenuDirective,
        ],
        exports: [
            big_breadcrumbs_component_1.BigBreadcrumbsComponent,
            minify_menu_component_1.MinifyMenuComponent,
            navigation_component_1.NavigationComponent,
            smart_menu_directive_1.SmartMenuDirective,
        ]
    })
], NavigationModule);
exports.NavigationModule = NavigationModule;
//# sourceMappingURL=navigation.module.js.map