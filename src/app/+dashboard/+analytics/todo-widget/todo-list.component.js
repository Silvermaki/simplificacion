"use strict";
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var TodoListComponent = (function () {
    function TodoListComponent(el, todoService) {
        this.el = el;
        this.todoService = todoService;
        this.items = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.subject.subscribe(function (todos) {
            _this.setItems(todos);
        });
        this.setItems(this.todoService.todos);
    };
    TodoListComponent.prototype.setItems = function (todos) {
        var _this = this;
        this.items = todos.filter(function (it) { return it.state == _this.state.name; });
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.todoService.toggleTodo(todo);
    };
    TodoListComponent.prototype.deleteTodo = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    return TodoListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TodoListComponent.prototype, "state", void 0);
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        templateUrl: './todo-list.component.html',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, todo_service_1.TodoService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map