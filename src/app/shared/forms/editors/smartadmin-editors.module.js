"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var summernote_directive_1 = require("./summernote.directive");
var summernote_attach_directive_1 = require("./summernote-attach.directive");
var summernote_detach_directive_1 = require("./summernote-detach.directive");
var markdown_editor_directive_1 = require("./markdown-editor.directive");
var SmartadminEditorsModule = (function () {
    function SmartadminEditorsModule() {
    }
    return SmartadminEditorsModule;
}());
SmartadminEditorsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            summernote_directive_1.SummernoteDirective,
            summernote_attach_directive_1.SummernoteAttachDirective,
            summernote_detach_directive_1.SummernoteDetachDirective,
            markdown_editor_directive_1.MarkdownEditorDirective,
        ],
        exports: [
            summernote_directive_1.SummernoteDirective,
            summernote_attach_directive_1.SummernoteAttachDirective,
            summernote_detach_directive_1.SummernoteDetachDirective,
            markdown_editor_directive_1.MarkdownEditorDirective,
        ]
    })
], SmartadminEditorsModule);
exports.SmartadminEditorsModule = SmartadminEditorsModule;
//# sourceMappingURL=smartadmin-editors.module.js.map