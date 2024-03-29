/**
 * Created by griga on 12/26/16.
 */
"use strict";
var core_1 = require("@angular/core");
/* *****************************************\
 * Sliding Animations
\* *****************************************/
function slideToRight() {
    return core_1.trigger('slideToRight', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateX(-100%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateX(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(100%)' }))
        ])
    ]);
}
exports.slideToRight = slideToRight;
function slideToLeft() {
    return core_1.trigger('slideToLeft', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateX(100%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateX(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
exports.slideToLeft = slideToLeft;
function slideToTop() {
    return core_1.trigger('slideToTop', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%', flex: '1' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%', flex: '1' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateY(-100%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateY(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(100%)' }))
        ])
    ]);
}
exports.slideToTop = slideToTop;
function slideToBottom() {
    return core_1.trigger('slideToBottom', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%', flex: '1' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%', flex: '1' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateY(100%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateY(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
exports.slideToBottom = slideToBottom;
/* *****************************************\
 * Fading Animations
\* *****************************************/
function fadeInTop() {
    return core_1.trigger('fadeInTop', [
        core_1.state('void', core_1.style({ opacity: '0', })),
        core_1.state('*', core_1.style({ top: '0px', height: '100%', width: '100%', position: 'absolute' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateY(10px)' }),
            core_1.animate('.5s 1s ease-in', core_1.style({
                transform: 'translateY(0)',
                opacity: '1'
            }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateY(0)' }),
            core_1.animate('.2s 1s ease-in', core_1.style({
                transform: 'translateY(10px)',
                opacity: '0'
            }))
        ])
    ]);
}
exports.fadeInTop = fadeInTop;
function fadeInLeft() {
    return core_1.trigger('fadeInLeft', [
        core_1.state('void', core_1.style({ opacity: '0', flex: '0 2', position: 'absolute' })),
        core_1.state('*', core_1.style({ flex: '1 0', top: '0px' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateX(10px)' }),
            core_1.animate('.5s ease-in', core_1.style({
                transform: 'translateX(0)',
                opacity: '1'
            }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateX(0)' }),
            core_1.animate('.5s ease-out', core_1.style({
                transform: 'translateX(50px)',
                opacity: '0'
            }))
        ])
    ]);
}
exports.fadeInLeft = fadeInLeft;
/* *****************************************\
 * Fading Animations
\* *****************************************/
function fadeZoomInTop() {
    return core_1.trigger('fadeZoomInTop', [
        core_1.state('void', core_1.style({ opacity: '0' })),
        core_1.state('*', core_1.style({ top: '0px', height: '100%', width: '100%', position: 'absolute' })),
        // state('*', style({flex: '1'})),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translate3d(0, 10px, 0) ' }),
            core_1.animate('0.5s ease-out', core_1.style({
                transform: 'translate3d(0, 0, 0)',
                opacity: '1'
            }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translate3d(0, 0, 0) ' }),
            core_1.animate('0.2s ease-in', core_1.style({
                transform: 'translate3d(0, 40px, 0)',
                opacity: '0'
            }))
        ])
    ]);
}
exports.fadeZoomInTop = fadeZoomInTop;
//# sourceMappingURL=router.animations.js.map