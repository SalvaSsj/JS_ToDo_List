export default class EditModel {

    constructor() {
        this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodo(id) {
        return this.todos.find((todo) => todo.id === id);
    }

    updateTodo(id, newTodoData) {
        const todoToUpdate = this.getTodo(id);
        
        if (todoToUpdate) {
            todoToUpdate.title = newTodoData.title !== undefined ? newTodoData.title : todoToUpdate.title;
            todoToUpdate.description = newTodoData.description !== undefined ? newTodoData.description : todoToUpdate.description;
            todoToUpdate.completed = newTodoData.completed !== undefined ? newTodoData.completed : todoToUpdate.completed;
            
            this.save();
        }
        
        return this.todos;
    }

    setTodos(todos) {
        this.todos = todos;
    }
}