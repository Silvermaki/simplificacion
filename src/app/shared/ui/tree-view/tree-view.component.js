"use strict";
var core_1 = require("@angular/core");
var TreeViewComponent = (function () {
    function TreeViewComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.change = new core_1.EventEmitter();
    }
    TreeViewComponent.prototype.ngOnChanges = function () {
        this.items && this.render();
    };
    TreeViewComponent.prototype.render = function () {
        var root = this.el.nativeElement.getElementsByTagName('div')[0];
        root.appendChild(this.createBranch(this.items, { expanded: true }));
    };
    TreeViewComponent.prototype.createChild = function (item) {
        var _this = this;
        var i, branch;
        var li = document.createElement('li');
        li.innerHTML = item.content;
        if (item.children) {
            li.className += ' parent_li';
            i = this.addPlusMinusSign(li, item);
            branch = this.createBranch(item.children, item);
            li.appendChild(branch);
        }
        this.renderer.listen(li, 'click', function (event) {
            event.stopPropagation();
            if (item.children) {
                item.expanded = !item.expanded;
                _this.togglePlusMinusSign(i, item);
                branch.className = item.expanded ? '' : 'hidden';
            }
            _this.change.emit(item);
        });
        return li;
    };
    TreeViewComponent.prototype.createBranch = function (items, parent) {
        var _this = this;
        var ul = document.createElement('ul');
        items.forEach(function (item) {
            ul.appendChild(_this.createChild(item));
        });
        ul.className = parent.expanded ? '' : 'hidden';
        return ul;
    };
    TreeViewComponent.prototype.addPlusMinusSign = function (li, item) {
        var i = document.createElement('i');
        this.togglePlusMinusSign(i, item);
        var span = li.getElementsByTagName('span')[0];
        if (span) {
            span.appendChild(i);
        }
        else {
            li.appendChild(i);
        }
        return i;
    };
    TreeViewComponent.prototype.togglePlusMinusSign = function (i, item) {
        i.className = item.expanded ? 'sa-icon fa fa-lg fa-minus-circle' : 'sa-icon fa fa-lg fa-plus-circle';
    };
    return TreeViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "change", void 0);
TreeViewComponent = __decorate([
    core_1.Component({
        selector: 'sa-tree-view',
        template: '<div class="sa-tree-view tree"></div>',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], TreeViewComponent);
exports.TreeViewComponent = TreeViewComponent;
//# sourceMappingURL=tree-view.component.js.map