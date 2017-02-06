"use strict";
var core_1 = require("@angular/core");
var UiDatepickerDirective = (function () {
    function UiDatepickerDirective(el) {
        this.el = el;
    }
    UiDatepickerDirective.prototype.ngOnInit = function () {
        var onSelectCallbacks = [];
        var saUiDatepicker = this.saUiDatepicker || {};
        var element = $(this.el.nativeElement);
        if (saUiDatepicker.minRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
            });
        }
        if (saUiDatepicker.maxRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
            });
        }
        //Let others know about changes to the data field
        onSelectCallbacks.push(function (selectedDate) {
            element.triggerHandler("change");
            var form = element.closest('form');
            if (typeof form.bootstrapValidator == 'function') {
                try {
                    form.bootstrapValidator('revalidateField', element);
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        });
        var options = $.extend(saUiDatepicker, {
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function (selectedDate) {
                onSelectCallbacks.forEach(function (callback) {
                    callback.call(callback, selectedDate);
                });
            }
        });
        element.datepicker(options);
    };
    return UiDatepickerDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UiDatepickerDirective.prototype, "saUiDatepicker", void 0);
UiDatepickerDirective = __decorate([
    core_1.Directive({
        selector: '[saUiDatepicker]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], UiDatepickerDirective);
exports.UiDatepickerDirective = UiDatepickerDirective;
//# sourceMappingURL=ui-datepicker.directive.js.map