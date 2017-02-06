"use strict";
var core_1 = require("@angular/core");
var flot_examples_1 = require("../../../+graphs/+flot-charts/flot-examples");
var LiveStatsComponent = (function () {
    function LiveStatsComponent(zone) {
        this.zone = zone;
        this.liveSwitch = false;
        this.liveStatsChartOptions = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: ['rgb(87, 136, 156)'],
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            },
                            {
                                opacity: 0
                            }
                        ]
                    },
                    steps: false
                }
            }
        };
    }
    LiveStatsComponent.prototype.ngOnInit = function () {
        this.updateStats();
    };
    LiveStatsComponent.prototype.updateStats = function () {
        this.liveStats = [flot_examples_1.FakeDataSource.getRandomData()];
    };
    LiveStatsComponent.prototype.toggleSwitch = function () {
        var _this = this;
        if (this.liveSwitch) {
            this.interval = setInterval(function () {
                _this.updateStats();
            }, 1000);
        }
        else {
            clearInterval(this.interval);
        }
    };
    LiveStatsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    return LiveStatsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LiveStatsComponent.prototype, "liveSwitch", void 0);
LiveStatsComponent = __decorate([
    core_1.Component({
        selector: 'live-stats-feed',
        templateUrl: './live-stats.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], LiveStatsComponent);
exports.LiveStatsComponent = LiveStatsComponent;
//# sourceMappingURL=live-stats.component.js.map