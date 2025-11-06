import { TodoModelBase } from './todo_model.js';

export class UpdateModel extends TodoModelBase {
    add(title, description) {
        const newTodo = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };
        this.todos.push(newTodo);
        this._save();
    }

    update(id, newTitle, newDescription, newCompleted) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.title = newTitle;
            todo.description = newDescription;
            todo.completed = newCompleted;
            this._save();
        }
    }
    
    toggleCompleted(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this._save();
        }
    }

    delete(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this._save();
    }
}