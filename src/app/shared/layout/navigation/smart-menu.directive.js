"use strict";
var core_1 = require("@angular/core");
var layout_service_1 = require("../../layout/layout.service");
var router_1 = require("@angular/router");
var SmartMenuDirective = (function () {
    function SmartMenuDirective(menu, router, layoutService) {
        var _this = this;
        this.menu = menu;
        this.router = router;
        this.layoutService = layoutService;
        this.processLayout = function (store) {
            if (store.menuOnTop) {
                _this.$menu.find('li.open').each(function (i, li) {
                    _this.toggle($(li), false);
                });
            }
            else {
                _this.$menu.find('li.active').each(function (i, li) {
                    $(li).parents('li').each(function (j, parentLi) {
                        _this.toggle($(parentLi), true);
                    });
                });
            }
            if (store.mobileViewActivated) {
                $('body').removeClass("minified");
            }
        };
        this.$menu = $(this.menu.nativeElement);
    }
    SmartMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.processLayout(store);
        });
        this.routerSub = this.router.events.subscribe(function (event) {
            setTimeout(function () {
                _this.processLayout(_this.layoutService.store);
            }, 1);
            _this.routerSub.unsubscribe();
        });
        $('[routerLink]', this.$menu).on('click', function () {
            if (_this.layoutService.store.mobileViewActivated) {
                _this.layoutService.onCollapseMenu();
            }
        });
    };
    SmartMenuDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.$menu.find('li:has(> ul)').each(function (i, li) {
            var $menuItem = $(li);
            var $a = $menuItem.find('>a');
            var sign = $('<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>');
            $a.on('click', function (e) {
                _this.toggle($menuItem);
                e.stopPropagation();
                return false;
            }).append(sign);
        });
    };
    SmartMenuDirective.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    SmartMenuDirective.prototype.toggle = function ($el, condition) {
        var _this = this;
        if (condition === void 0) { condition = !$el.data('open'); }
        $el.toggleClass('open', condition);
        if (condition) {
            $el.find('>ul').slideDown();
        }
        else {
            $el.find('>ul').slideUp();
        }
        $el.find('>a>.collapse-sign>em')
            .toggleClass('fa-plus-square-o', !condition)
            .toggleClass('fa-minus-square-o', condition);
        $el.data('open', condition);
        if (condition) {
            $el.siblings('.open').each(function (i, it) {
                var sib = $(it);
                _this.toggle(sib, false);
            });
        }
    };
    return SmartMenuDirective;
}());
SmartMenuDirective = __decorate([
    core_1.Directive({
        selector: '[saSmartMenu]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        router_1.Router,
        layout_service_1.LayoutService])
], SmartMenuDirective);
exports.SmartMenuDirective = SmartMenuDirective;
//# sourceMappingURL=smart-menu.directive.js.map