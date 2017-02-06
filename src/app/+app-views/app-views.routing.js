"use strict";
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: 'forum',
        loadChildren: function () { return System.import('./+forum/forum.module').then(function (m) { return m.ForumModule; }); }
    },
    {
        path: 'profile',
        loadChildren: function () { return System.import('./+profile/profile.module').then(function (m) { return m.ProfileModule; }); }
    },
    {
        path: 'blog',
        loadChildren: function () { return System.import('./+blog/blog.module').then(function (m) { return m.BlogModule; }); }
    },
    {
        path: 'gallery',
        loadChildren: function () { return System.import('./+gallery/gallery-demo.module').then(function (m) { return m.GalleryDemoModule; }); }
    },
    {
        path: 'timeline',
        loadChildren: function () { return System.import('./+timeline/timeline.module').then(function (m) { return m.TimelineModule; }); }
    },
    {
        path: 'projects',
        loadChildren: function () { return System.import('./+projects/projects-list.module').then(function (m) { return m.ProjectsListModule; }); }
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=app-views.routing.js.map