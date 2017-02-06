"use strict";
var core_1 = require("@angular/core");
var counter = 1;
var NestableListComponent = (function () {
    function NestableListComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.change = new core_1.EventEmitter();
    }
    NestableListComponent.prototype.ngOnInit = function () {
    };
    NestableListComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.items && System.import('script-loader!smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js').then(function () {
            _this.render();
        });
    };
    NestableListComponent.prototype.render = function () {
        var _this = this;
        var root = this.el.nativeElement.getElementsByTagName('div')[0];
        root.appendChild(this.createBranch(this.items));
        var options = this.options || {};
        $(root).nestable(options);
        $(root).on('change', function () {
            _this.change.emit($(root).nestable('serialize'));
        });
    };
    NestableListComponent.prototype.createChild = function (item) {
        var li = document.createElement('li');
        li.className = 'dd-item';
        li.dataset['id'] = item.id || ('NestableListComponent' + counter++);
        if (item.content) {
            var div = document.createElement('div');
            div.className = 'dd-handle';
            div.innerHTML = item.content;
            li.appendChild(div);
        }
        if (item.children) {
            var branch = this.createBranch(item.children);
            li.appendChild(branch);
        }
        return li;
    };
    NestableListComponent.prototype.createBranch = function (items) {
        var _this = this;
        var ol = document.createElement('ol');
        ol.className = 'dd-list';
        items.forEach(function (item) {
            ol.appendChild(_this.createChild(item));
        });
        return ol;
    };
    return NestableListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NestableListComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NestableListComponent.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NestableListComponent.prototype, "change", void 0);
NestableListComponent = __decorate([
    core_1.Component({
        selector: 'sa-nestable-list',
        template: '<div class="dd"></div>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], NestableListComponent);
exports.NestableListComponent = NestableListComponent;
//# sourceMappingURL=nestable-list.component.js.map