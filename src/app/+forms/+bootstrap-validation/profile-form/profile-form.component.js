"use strict";
var core_1 = require("@angular/core");
var ProfileFormComponent = (function () {
    function ProfileFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        emailAddress: {
                            message: 'The email address is not valid'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    ProfileFormComponent.prototype.ngOnInit = function () {
    };
    ProfileFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    return ProfileFormComponent;
}());
ProfileFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-profile-form',
        templateUrl: './profile-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], ProfileFormComponent);
exports.ProfileFormComponent = ProfileFormComponent;
//# sourceMappingURL=profile-form.component.js.map