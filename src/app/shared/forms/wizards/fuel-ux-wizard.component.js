"use strict";
var core_1 = require("@angular/core");
var FuelUxWizardComponent = (function () {
    function FuelUxWizardComponent(el) {
        this.el = el;
        this.complete = new core_1.EventEmitter();
    }
    FuelUxWizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script-loader!fuelux/js/wizard.js').then(function () {
            _this.render();
        });
    };
    FuelUxWizardComponent.prototype.render = function () {
        var _this = this;
        var element = $(this.el.nativeElement);
        var wizard = element.wizard();
        var $form = element.find('form');
        wizard.on('actionclicked.fu.wizard', function (e, data) {
            if ($form.data('validator')) {
                if (!$form.valid()) {
                    $form.data('validator').focusInvalid();
                    e.preventDefault();
                }
            }
        });
        wizard.on('finished.fu.wizard', function (e, data) {
            var formData = {};
            $form.serializeArray().forEach(function (field) {
                formData[field.name] = field.value;
            });
            _this.complete.emit(formData);
        });
    };
    return FuelUxWizardComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FuelUxWizardComponent.prototype, "complete", void 0);
FuelUxWizardComponent = __decorate([
    core_1.Component({
        selector: 'fuel-ux-wizard',
        template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FuelUxWizardComponent);
exports.FuelUxWizardComponent = FuelUxWizardComponent;
//# sourceMappingURL=fuel-ux-wizard.component.js.map