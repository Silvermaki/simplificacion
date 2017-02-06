"use strict";
var core_1 = require("@angular/core");
var DuallistboxComponent = (function () {
    function DuallistboxComponent(el) {
        this.el = el;
        this.itemsChange = new core_1.EventEmitter();
        this.selected = [];
        this.nonSelectedListLabel = 'Non-selected';
        this.selectedListLabel = 'Selected';
        this.preserveSelectionOnMove = 'moved';
        this.moveOnSelect = false;
        this.size = 10;
        this.element = $(this.el.nativeElement);
    }
    DuallistboxComponent.prototype.onClick = function () {
        var _this = this;
        var selected = this.element.find('.smart-duallistbox').val() || [];
        if (selected.some(function (it) { return _this.selected.indexOf(it) == -1; })
            ||
                this.selected.some(function (it) { return selected.indexOf(it) == -1; })) {
            this.selected = selected;
            this.items.forEach(function (item) {
                if (_this.selected.indexOf(item.key) > -1) {
                    item.selected = true;
                }
                else {
                    delete item.selected;
                }
            });
            this.itemsChange.emit(this.items);
        }
    };
    DuallistboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected = this.items.filter(function (item) { return item.selected; }).map(function (item) { return item.key; });
        System.import('script-loader!bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js').then(function () {
            _this.render();
        });
    };
    DuallistboxComponent.prototype.render = function () {
        var options = {
            nonSelectedFilter: this.nonSelectedFilter,
            nonSelectedListLabel: this.nonSelectedListLabel,
            selectedListLabel: this.selectedListLabel,
            preserveSelectionOnMove: this.preserveSelectionOnMove,
            moveOnSelect: this.moveOnSelect,
            size: this.size
        };
        this.element.bootstrapDualListbox(options);
    };
    return DuallistboxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DuallistboxComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "itemsChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DuallistboxComponent.prototype, "selected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "nonSelectedFilter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "nonSelectedListLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "selectedListLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "preserveSelectionOnMove", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DuallistboxComponent.prototype, "moveOnSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DuallistboxComponent.prototype, "size", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DuallistboxComponent.prototype, "onClick", null);
DuallistboxComponent = __decorate([
    core_1.Component({
        selector: 'duallistbox',
        template: "\n     <select multiple (click)=\"onChange()\" class=\"smart-duallistbox\">\n        <option *ngFor=\"let item of items\" [selected]=\"item.selected\" [value]=\"item.key\">{{item.value}}</option>\n      </select>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DuallistboxComponent);
exports.DuallistboxComponent = DuallistboxComponent;
//# sourceMappingURL=duallistbox.component.js.map