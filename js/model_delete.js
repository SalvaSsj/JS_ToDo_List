export default class DeleteModel {

    constructor(models, save) {
        this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    }
    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    removeTodo(id) {
        const index = this.findTodo(id);
        if (index > -1) {
            this.todos.splice(index, 1);
            this.save();
        }
        return this.todos;
    }
    setTodos(todos) {
        this.todos = todos;
    }
}