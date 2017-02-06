"use strict";
var core_1 = require("@angular/core");
var ButtonGroupFormComponent = (function () {
    function ButtonGroupFormComponent() {
        this.validatorOptions = {
            excluded: ':disabled',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                gender: {
                    validators: {
                        notEmpty: {
                            message: 'The gender is required'
                        }
                    }
                },
                'languages': {
                    validators: {
                        choice: {
                            min: 1,
                            max: 2,
                            message: 'Please choose 1 - 2 languages you can speak'
                        }
                    }
                }
            }
        };
        this.model = {
            languages: [
                { key: 'english', value: 'English', selected: false },
                { key: 'german', value: 'German', selected: false },
                { key: 'french', value: 'French', selected: false },
                { key: 'russian', value: 'Russian', selected: false },
                { key: 'italian', value: 'Italian', selected: false }
            ],
            gender: undefined
        };
        this.submitted = false;
    }
    ButtonGroupFormComponent.prototype.ngOnInit = function () {
    };
    ButtonGroupFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    return ButtonGroupFormComponent;
}());
ButtonGroupFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-button-group-form',
        templateUrl: './button-group-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], ButtonGroupFormComponent);
exports.ButtonGroupFormComponent = ButtonGroupFormComponent;
//# sourceMappingURL=button-group-form.component.js.map