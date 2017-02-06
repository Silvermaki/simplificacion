"use strict";
var core_1 = require("@angular/core");
var shared_1 = require("./shared");
var MapsComponent = (function () {
    function MapsComponent(apiService, styleService) {
        this.apiService = apiService;
        this.styleService = styleService;
        this.styles = [
            { key: 'colorful', name: 'Colorful', url: '/maps/colorful.json' },
            { key: 'greyscale', name: 'Greyscale', url: '/maps/greyscale.json' },
            { key: 'metro', name: 'Metro', url: '/maps/metro.json' },
            { key: 'mono-color', name: 'Mono-color', url: '/maps/mono-color.json' },
            { key: 'monochrome', name: 'Monochrome', url: '/maps/monochrome.json' },
            { key: 'nightvision', name: 'Nightvision', url: '/maps/nightvision.json' },
            {
                key: 'nightvision-highlight',
                name: 'Nightvision Highlight',
                url: '/maps/nightvision-highlight.json'
            },
            { key: 'old-paper', name: 'Old Paper', url: '/maps/old-paper.json' }
        ];
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeStyle = this.styles[0];
        this.apiService.loadAPI.then(function (google) {
            _this.map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8
            });
            _this.fetchStyle(_this.activeStyle);
        });
    };
    MapsComponent.prototype.ngOnDestroy = function () {
    };
    MapsComponent.prototype.setStyle = function (style) {
        this.activeStyle = style;
        this.fetchStyle(style);
    };
    MapsComponent.prototype.fetchStyle = function (style) {
        var _this = this;
        this.styleService.fetchStyle(style).subscribe(function (styleDef) {
            _this.map.mapTypes.set(style.key, new google.maps.StyledMapType(styleDef, { name: style.name }));
            _this.map.setMapTypeId(style.key);
        });
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    core_1.Component({
        selector: 'sa-maps',
        templateUrl: './maps.component.html',
    }),
    __metadata("design:paramtypes", [shared_1.GoogleAPIService, shared_1.MapStyleService])
], MapsComponent);
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=maps.component.js.map