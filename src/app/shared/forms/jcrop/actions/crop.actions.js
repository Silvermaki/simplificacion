"use strict";
var core_1 = require("@angular/core");
var ng2_redux_1 = require("ng2-redux");
/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
var CropActions = CropActions_1 = (function () {
    function CropActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    CropActions.prototype.cropSelect = function (crop, storeId) {
        this.ngRedux.dispatch({
            type: CropActions_1.CROP_SELECT,
            crop: crop,
            storeId: storeId
        });
    };
    CropActions.prototype.cropChange = function (crop, storeId) {
        this.ngRedux.dispatch({
            type: CropActions_1.CROP_CHANGE,
            crop: crop,
            storeId: storeId
        });
    };
    CropActions.prototype.cropFieldChange = function (field, value, storeId) {
        this.ngRedux.dispatch({
            type: CropActions_1.CROP_FIELD_CHANGE,
            field: field,
            value: parseInt(value),
            storeId: storeId
        });
    };
    CropActions.prototype.cropRandomSelection = function (storeId) {
        this.ngRedux.dispatch({
            type: CropActions_1.CROP_RANDOM_SELECTION,
            crop: this.randomSelection(),
            storeId: storeId
        });
    };
    CropActions.prototype.randomSelection = function () {
        var x = Math.round(Math.random() * 250);
        var y = Math.round(Math.random() * 180);
        return {
            x: x,
            y: y,
            x2: x + Math.round((Math.random() * 200) + 50),
            y2: y + Math.round((Math.random() * 300) + 60)
        };
    };
    return CropActions;
}());
CropActions.CROP_SELECT = 'CROP_SELECT';
CropActions.CROP_CHANGE = 'CROP_CHANGE';
CropActions.CROP_FIELD_CHANGE = 'CROP_FIELD_CHANGE';
CropActions.CROP_RANDOM_SELECTION = 'CROP_RANDOM_SELECTION';
CropActions = CropActions_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_redux_1.NgRedux])
], CropActions);
exports.CropActions = CropActions;
var CropActions_1;
//# sourceMappingURL=crop.actions.js.map