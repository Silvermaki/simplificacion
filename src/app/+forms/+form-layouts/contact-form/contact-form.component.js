"use strict";
var core_1 = require("@angular/core");
var ContactFormComponent = (function () {
    function ContactFormComponent() {
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
                message: {
                    required: true,
                    minlength: 10
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
                message: {
                    required: 'Please enter your message'
                }
            }
        };
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-contact-form',
        templateUrl: './contact-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map