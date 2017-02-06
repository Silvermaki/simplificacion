"use strict";
var core_1 = require("@angular/core");
var BootstrapValidatorDirective = (function () {
    function BootstrapValidatorDirective(el) {
        var _this = this;
        this.el = el;
        this.s = function () {
            var bootstrapValidator = _this.$form.data('bootstrapValidator');
            bootstrapValidator.validate();
            if (bootstrapValidator.isValid())
                _this.$form.submit();
            else
                return;
        };
    }
    BootstrapValidatorDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!smartadmin-plugins/bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js').then(function () {
            _this.attach();
        });
    };
    BootstrapValidatorDirective.prototype.attach = function () {
        this.$form = $(this.el.nativeElement);
        this.$form.bootstrapValidator(this.saBootstrapValidator || {});
        this.$form.submit(function (ev) { ev.preventDefault(); });
    };
    return BootstrapValidatorDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BootstrapValidatorDirective.prototype, "saBootstrapValidator", void 0);
__decorate([
    core_1.HostListener('submit'),
    __metadata("design:type", Object)
], BootstrapValidatorDirective.prototype, "s", void 0);
BootstrapValidatorDirective = __decorate([
    core_1.Directive({
        selector: '[saBootstrapValidator]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], BootstrapValidatorDirective);
exports.BootstrapValidatorDirective = BootstrapValidatorDirective;
//# sourceMappingURL=bootstrap-validator.directive.js.map