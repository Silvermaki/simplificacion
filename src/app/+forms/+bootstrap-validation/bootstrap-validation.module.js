"use strict";
var core_1 = require("@angular/core");
var movie_form_component_1 = require("./movie-form/movie-form.component");
var toggling_form_component_1 = require("./toggling-form/toggling-form.component");
var attribute_form_component_1 = require("./attribute-form/attribute-form.component");
var button_group_form_component_1 = require("./button-group-form/button-group-form.component");
var product_form_component_1 = require("./product-form/product-form.component");
var profile_form_component_1 = require("./profile-form/profile-form.component");
var contact_form_component_1 = require("./contact-form/contact-form.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var bootstrap_validation_component_1 = require("./bootstrap-validation.component");
var smartadmin_validation_module_1 = require("../../shared/forms/validation/smartadmin-validation.module");
var bootstrap_validation_routing_1 = require("./bootstrap-validation.routing");
var BootstrapValidationModule = (function () {
    function BootstrapValidationModule() {
    }
    return BootstrapValidationModule;
}());
BootstrapValidationModule = __decorate([
    core_1.NgModule({
        imports: [
            smartadmin_module_1.SmartadminModule,
            smartadmin_validation_module_1.SmartadminValidationModule,
            bootstrap_validation_routing_1.bootstrapValidationRouting
        ],
        declarations: [movie_form_component_1.MovieFormComponent, toggling_form_component_1.TogglingFormComponent, contact_form_component_1.ContactFormComponent,
            attribute_form_component_1.AttributeFormComponent, button_group_form_component_1.ButtonGroupFormComponent, product_form_component_1.ProductFormComponent, profile_form_component_1.ProfileFormComponent,
            bootstrap_validation_component_1.BootstrapValidationComponent,
        ],
        exports: []
    })
], BootstrapValidationModule);
exports.BootstrapValidationModule = BootstrapValidationModule;
//# sourceMappingURL=bootstrap-validation.module.js.map