"use strict";
var core_1 = require("@angular/core");
var OrderFormComponent = (function () {
    function OrderFormComponent() {
        this.validationOptions = {
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                interested: {
                    required: true
                },
                budget: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter your name'
                },
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                phone: {
                    required: 'Please enter your phone number'
                },
                interested: {
                    required: 'Please select interested service'
                },
                budget: {
                    required: 'Please select your budget'
                }
            }
        };
    }
    OrderFormComponent.prototype.ngOnInit = function () {
    };
    return OrderFormComponent;
}());
OrderFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-order-form',
        templateUrl: './order-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], OrderFormComponent);
exports.OrderFormComponent = OrderFormComponent;
//# sourceMappingURL=order-form.component.js.map