"use strict";
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var todo_1 = require("./todo");
var TodoWidgetComponent = (function () {
    function TodoWidgetComponent(todoService) {
        this.todoService = todoService;
        this.states = this.todoService.states;
    }
    TodoWidgetComponent.prototype.ngOnInit = function () {
    };
    TodoWidgetComponent.prototype.createTodo = function () {
        this.todoService.createTodo(this.newTodo);
        this.newTodo = null;
    };
    TodoWidgetComponent.prototype.toggleAdd = function () {
        if (this.newTodo) {
            this.newTodo = null;
        }
        else {
            this.newTodo = new todo_1.Todo();
            this.newTodo.state = 'Important';
        }
    };
    return TodoWidgetComponent;
}());
TodoWidgetComponent = __decorate([
    core_1.Component({
        selector: 'todo-widget',
        templateUrl: './todo-widget.component.html',
        styles: [""],
        providers: [todo_service_1.TodoService],
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoWidgetComponent);
exports.TodoWidgetComponent = TodoWidgetComponent;
//# sourceMappingURL=todo-widget.component.js.map