"use strict";
var core_1 = require("@angular/core");
var ProductFormComponent = (function () {
    function ProductFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                price: {
                    validators: {
                        notEmpty: {
                            message: 'The price is required'
                        },
                        numeric: {
                            message: 'The price must be a number'
                        }
                    }
                },
                amount: {
                    validators: {
                        notEmpty: {
                            message: 'The amount is required'
                        },
                        numeric: {
                            message: 'The amount must be a number'
                        }
                    }
                },
                color: {
                    validators: {
                        notEmpty: {
                            message: 'The color is required'
                        }
                    }
                },
                size: {
                    validators: {
                        notEmpty: {
                            message: 'The size is required'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    return ProductFormComponent;
}());
ProductFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-product-form',
        templateUrl: './product-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], ProductFormComponent);
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=product-form.component.js.map