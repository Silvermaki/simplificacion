"use strict";
var Todo = (function () {
    function Todo(title, state) {
        this.id = '' + Todo._id++;
        this.title = title;
        this.state = state;
        this.createdAt = new Date();
    }
    return Todo;
}());
Todo._id = 0;
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map