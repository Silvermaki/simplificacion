"use strict";
var protractor_1 = require("protractor");
describe('App', function () {
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should have a title', function () {
        var subject = protractor_1.browser.getTitle();
        var result = 'Smartadmin Angular2 template';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=app.e2e.js.map