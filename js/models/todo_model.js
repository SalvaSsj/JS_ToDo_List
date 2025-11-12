export class TodoModelBase {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    }

    _save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos() {
        return this.todos;
    }
}