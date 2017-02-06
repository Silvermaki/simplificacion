"use strict";
var core_1 = require("@angular/core");
var CommentFormComponent = (function () {
    function CommentFormComponent() {
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
                url: {
                    url: true
                },
                comment: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Enter your name',
                },
                email: {
                    required: 'Enter your email address',
                    email: 'Enter a VALID email'
                },
                url: {
                    email: 'Enter a VALID url'
                },
                comment: {
                    required: 'Please enter your comment'
                }
            }
        };
    }
    CommentFormComponent.prototype.ngOnInit = function () {
    };
    return CommentFormComponent;
}());
CommentFormComponent = __decorate([
    core_1.Component({
        selector: 'sa-comment-form',
        templateUrl: './comment-form.component.html',
    }),
    __metadata("design:paramtypes", [])
], CommentFormComponent);
exports.CommentFormComponent = CommentFormComponent;
//# sourceMappingURL=comment-form.component.js.map