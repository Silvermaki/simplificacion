"use strict";
var core_1 = require("@angular/core");
var ContactFormComponent = (function () {
    function ContactFormComponent() {
        this.validatorOptions = {
            container: '#messages',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required and cannot be empty'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The email address is not valid'
                        }
                    }
                },
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The title is required and cannot be empty'
                        },
                        stringLength: {
                            max: 100,
                            message: 'The title must be less than 100 characters long'
                        }
                    }
                },
                content: {
                    validators: {
                        notEmpty: {
                            message: 'The content is required and cannot be empty'
                        },
                        stringLength: {
                            max: 500,
                            message: 'The content must be less than 500 characters long'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
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