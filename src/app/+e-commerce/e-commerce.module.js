"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var orders_component_1 = require("./orders/orders.component");
var products_view_component_1 = require("./products-view/products-view.component");
var product_details_component_1 = require("./product-details/product-details.component");
var layout_module_1 = require("../shared/layout/layout.module");
var smartadmin_widgets_module_1 = require("../shared/widgets/smartadmin-widgets.module");
var stats_module_1 = require("../shared/stats/stats.module");
var e_commerce_routing_1 = require("./e-commerce.routing");
var smartadmin_datatable_module_1 = require("../shared/ui/datatable/smartadmin-datatable.module");
var shopping_cart_component_1 = require("./shopping-cart/shopping-cart.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ECommerceModule = (function () {
    function ECommerceModule() {
    }
    return ECommerceModule;
}());
ECommerceModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            e_commerce_routing_1.routing,
            layout_module_1.SmartadminLayoutModule,
            smartadmin_widgets_module_1.SmartadminWidgetsModule,
            stats_module_1.StatsModule,
            smartadmin_datatable_module_1.SmartadminDatatableModule,
            ng2_bootstrap_1.CarouselModule,
        ],
        declarations: [
            shopping_cart_component_1.ShoppingCartComponent,
            orders_component_1.OrdersComponent,
            products_view_component_1.ProductsViewComponent, product_details_component_1.ProductDetailsComponent
        ]
    })
], ECommerceModule);
exports.ECommerceModule = ECommerceModule;
//# sourceMappingURL=e-commerce.module.js.map