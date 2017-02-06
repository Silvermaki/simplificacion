"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var JqueryUiComponent = (function () {
    function JqueryUiComponent() {
        var _this = this;
        this.demoAutocompleteWords = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        this.ajaxAutocompleteOptions = {
            source: function (request, response) {
                jQuery.ajax({
                    url: "https://jqueryui.com/resources/demos/autocomplete/search.php",
                    dataType: "jsonp",
                    data: {
                        term: request.term
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },
            minLength: 2,
            select: function (event, ui) {
                console.log("Selected: " + ui.item.value + " aka " + ui.item.id);
                _this.ajaxAutocompleteSelected = ui.item.id;
            }
        };
        this.simpleDialogOptions = {
            autoOpen: false,
            width: 600,
            resizable: false,
            modal: true,
            closeText: '',
            title: "<div class='widget-header'><h4><i class='fa fa-warning'></i> Empty the recycle bin?</h4></div>",
            buttons: [{
                    html: "<i class='fa fa-trash-o'></i>&nbsp; Delete all items",
                    "class": "btn btn-danger",
                    click: function () {
                        $(this).dialog("close");
                    }
                }, {
                    html: "<i class='fa fa-times'></i>&nbsp; Cancel",
                    "class": "btn btn-default",
                    click: function () {
                        $(this).dialog("close");
                    }
                }]
        };
        this.messageDialogOptions = {
            autoOpen: false,
            modal: true,
            closeText: '',
            title: "<div class='widget-header'><h4><i class='icon-ok'></i> jQuery UI Dialog</h4></div>",
            buttons: [{
                    html: "Cancel",
                    "class": "btn btn-default",
                    click: function () {
                        $(this).dialog("close");
                    }
                }, {
                    html: "<i class='fa fa-check'></i>&nbsp; OK",
                    "class": "btn btn-primary",
                    click: function () {
                        $(this).dialog("close");
                    }
                }]
        };
    }
    JqueryUiComponent.prototype.ngOnInit = function () {
    };
    return JqueryUiComponent;
}());
JqueryUiComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-jquery-ui',
        templateUrl: './jquery-ui.component.html',
    }),
    __metadata("design:paramtypes", [])
], JqueryUiComponent);
exports.JqueryUiComponent = JqueryUiComponent;
//# sourceMappingURL=jquery-ui.component.js.map