"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var layout_service_1 = require("../layout.service");
var ShortcutComponent = (function () {
    function ShortcutComponent(layoutService, router, renderer, el) {
        this.layoutService = layoutService;
        this.router = router;
        this.renderer = renderer;
        this.el = el;
        this.state = 'out';
    }
    ShortcutComponent.prototype.shortcutTo = function (route) {
        this.router.navigate(route);
        this.layoutService.onShortcutToggle(false);
    };
    ShortcutComponent.prototype.ngOnInit = function () {
    };
    ShortcutComponent.prototype.listen = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.state = store.shortcutOpen ? 'in' : 'out';
            if (store.shortcutOpen) {
                _this.documentSub = _this.renderer.listenGlobal('document', 'mouseup', function (event) {
                    if (!_this.el.nativeElement.contains(event.target)) {
                        _this.layoutService.onShortcutToggle(false);
                        _this.documentUnsub();
                    }
                });
            }
            else {
                _this.documentUnsub();
            }
        });
    };
    ShortcutComponent.prototype.ngAfterContentInit = function () {
        this.listen();
    };
    ShortcutComponent.prototype.ngAfterViewInit = function () {
    };
    ShortcutComponent.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    ShortcutComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    return ShortcutComponent;
}());
ShortcutComponent = __decorate([
    core_1.Component({
        selector: 'sa-shortcut',
        templateUrl: './shortcut.component.html',
        animations: [
            core_1.trigger('shortcutState', [
                core_1.state('out', core_1.style({
                    height: 0,
                })),
                core_1.state('in', core_1.style({
                    height: '*',
                })),
                core_1.transition('out => in', core_1.animate('250ms ease-out')),
                core_1.transition('in => out', core_1.animate('250ms 300ms ease-in '))
            ])
        ]
    }),
    __metadata("design:paramtypes", [layout_service_1.LayoutService,
        router_1.Router,
        core_1.Renderer,
        core_1.ElementRef])
], ShortcutComponent);
exports.ShortcutComponent = ShortcutComponent;
//# sourceMappingURL=shortcut.component.js.map