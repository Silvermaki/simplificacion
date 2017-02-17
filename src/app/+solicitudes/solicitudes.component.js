"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var solicitudes_service_1 = require("./solicitudes.service");
var SolicitudesComponent = (function () {
    function SolicitudesComponent(router, SolicitudesService) {
        this.router = router;
        this.SolicitudesService = SolicitudesService;
        this.currentSections = [];
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
        this.data = {
            process: "",
            section: "",
            task: "",
            forms: ""
        };
        this.loadProcesses();
        this.loadSections();
        this.newRequest = false;
        this.start = true;
        this.message = "";
        this.model = [];
        this.modelFormat = {};
    }
    SolicitudesComponent.prototype.checkSelection = function () {
    };
    SolicitudesComponent.prototype.ngOnInit = function () {
    };
    SolicitudesComponent.prototype.loadTasks = function () {
        var _this = this;
        var load = {
            hash: this.currentUser.hash,
            id: this.data.section.id_section
        };
        this.SolicitudesService.getTasks(load).subscribe(function (data) { _this.tasks = data[0]; }, function (err) { return console.log(err); }, function () { return _this.loadForms(); });
    };
    SolicitudesComponent.prototype.loadForms = function () {
        var _this = this;
        this.setTask();
        this.data.forms = [];
        var load = {
            hash: this.currentUser.hash,
            id: this.data.task.id_task
        };
        this.SolicitudesService.getForms(load).subscribe(function (data) {
            _this.forms = data[0];
        }, function (err) { return console.log(err); }, function () { return _this.loadFields(); });
    };
    SolicitudesComponent.prototype.loadFields = function () {
        var _this = this;
        var load = {
            hash: this.currentUser.hash,
            id: this.data.section.id_section
        };
        this.SolicitudesService.getFields(load).subscribe(function (data) { _this.fields = (data[0]); }, function (err) { return console.log(err); }, function () { _this.setFormsFields(); });
    };
    SolicitudesComponent.prototype.setFormsFields = function () {
        var formFields = [];
        var values = [];
        this.model = [];
        var i;
        for (i = 0; i < this.forms.length; i++) {
            var j;
            for (j = 0; j < this.fields.length; j++) {
                if (this.forms[i].id_form === this.fields[j].id_form) {
                    formFields.push(this.fields[j]);
                    var copy = Object.assign({}, this.fields[j]);
                    this.model.push(copy);
                }
            }
            var temp = this.forms[i];
            temp.fields = formFields;
            temp.valid = false,
                temp.checked = false,
                temp.submitted = false,
                temp.key = "step" + i;
            values.push(temp);
            formFields = [];
        }
        this.setModel();
        this.data.forms = values;
        this.loadCatalogues();
    };
    SolicitudesComponent.prototype.setTask = function () {
        var i;
        for (i = 0; i < this.tasks.length; i = i + 1) {
            if (this.tasks[i].name === "Llenar Formulario") {
                this.data.task = this.tasks[i];
            }
        }
    };
    SolicitudesComponent.prototype.loadProcesses = function () {
        var _this = this;
        this.SolicitudesService.getProcesses(this.currentUser).subscribe(function (data) { _this.processes = data[0]; }, function (err) { return console.log(err); });
    };
    SolicitudesComponent.prototype.loadSections = function () {
        var _this = this;
        this.SolicitudesService.getSections(this.currentUser).subscribe(function (data) { _this.sections = data[0]; }, function (err) { return console.log(err); });
    };
    SolicitudesComponent.prototype.loadCatalogues = function () {
        var load = { hash: this.currentUser.hash, name: "" };
        var i;
        for (i = 0; i < this.data.forms.length; i++) {
            var j;
            for (j = 0; j < this.data.forms[i].fields.length; j++) {
                if (this.data.forms[i].fields[j].tag === "select") {
                    this.data.forms[i].fields[j].name;
                    load.name = this.data.forms[i].fields[j].name;
                    var temp2 = { name: this.data.forms[i].fields[j].name, listValues: [] };
                    this.SolicitudesService.getCatalogues(load).subscribe(function (data) { return temp2.listValues = data[0]; }, function (err) { return console.log(err); }, function () { return console.log(temp2); });
                }
            }
        }
    };
    SolicitudesComponent.prototype.processChanged = function () {
        if (this.data.process != "") {
            this.data.section = "";
            this.currentSections = [];
            var i;
            for (i = 0; i < this.sections.length; i = i + 1) {
                if (this.sections[i].id_process === this.data.process.id_process) {
                    this.currentSections.push(this.sections[i]);
                }
            }
        }
        else {
            this.data.section = "";
            this.currentSections = [];
        }
    };
    SolicitudesComponent.prototype.setModel = function () {
        var i;
        for (i = 0; i < this.model.length; i++) {
            var value = this.model[i].name;
            this.modelFormat[value] = "";
        }
    };
    SolicitudesComponent.prototype.submitForm = function () {
        this.loadTasks();
        this.start = false;
        this.newRequest = true;
    };
    return SolicitudesComponent;
}());
SolicitudesComponent = __decorate([
    core_1.Component({
        selector: 'solicitudes',
        templateUrl: './solicitudes.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        solicitudes_service_1.SolicitudesService])
], SolicitudesComponent);
exports.SolicitudesComponent = SolicitudesComponent;
//# sourceMappingURL=solicitudes.component.js.map