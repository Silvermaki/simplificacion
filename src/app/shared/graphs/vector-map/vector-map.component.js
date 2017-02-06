"use strict";
var core_1 = require("@angular/core");
var world_mill_1 = require("./world-mill");
require("jquery-mousewheel/jquery.mousewheel.js");
require("jvectormap/jquery-jvectormap.min.js");
$.fn.vectorMap('addMap', 'world_mill', world_mill_1.WORLD_MILL);
var VectorMapComponent = (function () {
    function VectorMapComponent(el) {
        this.el = el;
    }
    VectorMapComponent.prototype.ngOnInit = function () {
        // System.import('jvectormap/jquery-jvectormap.min.js').then(()=>{
        this.render();
        // })
    };
    VectorMapComponent.prototype.render = function () {
        var data = Object.assign({}, this.data);
        $('.vector-map-pane', this.el.nativeElement).vectorMap({
            map: 'world_mill',
            backgroundColor: 'white',
            zoomOnScroll: false,
            series: {
                regions: [{
                        values: data,
                        scale: ['#C8EEFF', '#0071A4'],
                        normalizeFunction: 'polynomial'
                    }]
            },
            onRegionTipShow: function (e, el, code) {
                el.html(el.html() + ' (GDP - ' + data[code] + ')');
                e.preventDefault();
            },
            onRegionOver: function (e) { e.preventDefault(); },
            onRegionOut: function (e) { e.preventDefault(); },
            onRegionClick: function (e) { e.preventDefault(); },
            onRegionSelected: function (e) { e.preventDefault(); },
            onMarkerTipShow: function (e) { e.preventDefault(); },
            onMarkerOver: function (e) { e.preventDefault(); },
            onMarkerOut: function (e) { e.preventDefault(); },
            onMarkerClick: function (e) { e.preventDefault(); },
            onMarkerSelected: function (e) { e.preventDefault(); },
            onViewportChange: function (e) {
                console.log(e);
                e.preventDefault();
            }
        });
        // this.mapObject = $vectorMap.vectorMap('get', 'mapObject');
        $('.jvectormap-zoomin', this.el.nativeElement).html('<i class="fa fa-plus"></i>');
        $('.jvectormap-zoomout', this.el.nativeElement).html('<i class="fa fa-minus"></i>');
    };
    VectorMapComponent.prototype.ngOnDestroy = function () {
        var mapObject = $('.vector-map-pane', this.el.nativeElement).vectorMap('get', 'mapObject');
        mapObject && mapObject.remove();
    };
    return VectorMapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VectorMapComponent.prototype, "data", void 0);
VectorMapComponent = __decorate([
    core_1.Component({
        selector: 'vector-map',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
        template: '<div ngNonBindable class="vector-map vector-map-pane" style="height: 300px;"></div>',
        styleUrls: ['./vector-map.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], VectorMapComponent);
exports.VectorMapComponent = VectorMapComponent;
//# sourceMappingURL=vector-map.component.js.map