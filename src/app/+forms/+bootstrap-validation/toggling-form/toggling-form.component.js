"use strict";
var core_1 = require("@angular/core");
var TogglingFormComponent = (function () {
    function TogglingFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: 'The company name is required'
                        }
                    }
                },
                // These fields will be validated when being visible
                job: {
                    validators: {
                        notEmpty: {
                            message: 'The job title is required'
                        }
                    }
                },
                department: {
                    validators: {
                        notEmpty: {
                            message: 'The department name is required'
                        }
                    }
                },
                mobilePhone: {
                    validators: {
                        notEmpty: {
                            message: 'The mobile phone number is required'
                        },
                        digits: {
                            message: 'The mobile phone number is not valid'
                        }
                    }
                },
                // These fields will be validated when being visible
                homePhone: {
                    validators: {
                        digits: {
                            message: 'The home phone number is not valid'
                        }
                    }
                },
                officePhone: {
                    validators: {
                        digits: {
                            message: 'The office phone number is not valid'
                        }
                    }
                }
            }
        };
        this.state = {
            jobInfo: false,
            poneInfo: false,
        };
        this.submitted = false;
    }
    TogglingFormComponent.prototype.toggleInfo = function (key) {
        this.state[key] = !this.state[key];
    };
    TogglingFormComponent.prototype.ngOnInit = function () {
    };
    TogglingFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    return TogglingFormComponent;
}());
TogglingFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-toggling-form',
        templateUrl: './toggling-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], TogglingFormComponent);
exports.TogglingFormComponent = TogglingFormComponent;
//# sourceMappingURL=toggling-form.component.js.map