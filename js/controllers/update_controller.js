import { UpdateModel } from '../models/update_model.js';
import { UpdateView } from '../views/update_view.js';

export class UpdateController {
    constructor(model, view) {
        this.model = model; 
        this.view = view;   

        this._setupEventListeners();
    }

    _setupEventListeners() {
        this.view.addBtn.addEventListener('click', this.handleAddTodo.bind(this));
        this.view.modalSaveBtn.addEventListener('click', this.handleUpdateTodo.bind(this));
        this.view.tableBody.addEventListener('click', this.handleTableUpdateActions.bind(this));
    }

    handleAddTodo() {
        const title = this.view.titleInput.value.trim();
        const description = this.view.descriptionInput.value.trim();
        const date = this.view.dateInput.value;
        const time = this.view.timeInput.value;

        if (title === '' || description === '' || date===null || time===null) {
            this.view.showAlert("El título, la descripción y la fecha son requeridos");
            return;
        }

        this.view.hideAlert();
        this.model.add(title, description,date,time); 
        this.view.render(this.model.getTodos()); 
        this.view.clearInputs(); 
    }

    handleTableUpdateActions(e) {
        const target = e.target.closest('button[data-action="edit"], input[data-action="toggle"], button[data-action="delete"]');
        if (!target) return;

        const row = target.closest('tr');
        const id = parseInt(row.dataset.todoId);
        const action = target.dataset.action;

        if (action === 'edit') {
            const todoToEdit = this.model.getTodos().find(t => t.id === id);
            this.view.openEditModal(todoToEdit);
        } else if (action === 'toggle') {
            this.model.toggleCompleted(id);
            this.view.render(this.model.getTodos());
        } else if (action === 'delete') {
            this.model.delete(id);
            this.view.render(this.model.getTodos());
        }
    }

    handleUpdateTodo() {
        const id = parseInt(this.view.modalIdInput.value);
        
        const title = this.view.modalTitleInput.value.trim();
        const description = this.view.modalDescriptionInput.value.trim();
        const completed = this.view.modalCompletedCheckbox.checked;
        const date = this.view.modalDateInput.value;
        const time = this.view.modalTimeInput.value;


        if (title === '' || description === '' || date===null || time===null) {
            this.view.showAlert("El título y la descripción son requeridos", true);
            return;
        }

        this.model.update(id, title, description, completed, date, time);
        this.view.render(this.model.getTodos());
        this.view.closeEditModal();
    }
}