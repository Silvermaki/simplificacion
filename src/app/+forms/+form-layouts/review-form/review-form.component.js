"use strict";
var core_1 = require("@angular/core");
var ReviewFormComponent = (function () {
    function ReviewFormComponent() {
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
                review: {
                    required: true,
                    minlength: 20
                },
                quality: {
                    required: true
                },
                reliability: {
                    required: true
                },
                overall: {
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
                    email: '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
                },
                review: {
                    required: 'Please enter your review'
                },
                quality: {
                    required: 'Please rate quality of the product'
                },
                reliability: {
                    required: 'Please rate reliability of the product'
                },
                overall: {
                    required: 'Please rate the product'
                }
            }
        };
    }
    ReviewFormComponent.prototype.ngOnInit = function () {
    };
    return ReviewFormComponent;
}());
ReviewFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-review-form',
        templateUrl: './review-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], ReviewFormComponent);
exports.ReviewFormComponent = ReviewFormComponent;
//# sourceMappingURL=review-form.component.js.map