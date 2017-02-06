"use strict";
var core_1 = require("@angular/core");
var index_1 = require("ng2-redux/lib/index");
/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
var OptionsActions = OptionsActions_1 = (function () {
    function OptionsActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    OptionsActions.prototype.toggleOption = function (update) {
        this.ngRedux.dispatch({
            type: OptionsActions_1.TOGGLE_OPTION,
            option: update.option,
            storeId: update.storeId
        });
    };
    OptionsActions.prototype.setOptions = function (update) {
        this.ngRedux.dispatch({
            type: OptionsActions_1.SET_OPTIONS,
            options: update.options,
            storeId: update.storeId
        });
    };
    return OptionsActions;
}());
OptionsActions.TOGGLE_OPTION = 'TOGGLE_OPTION';
OptionsActions.SET_OPTIONS = 'SET_OPTIONS';
OptionsActions = OptionsActions_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.NgRedux])
], OptionsActions);
exports.OptionsActions = OptionsActions;
var OptionsActions_1;
//# sourceMappingURL=options.actions.js.map