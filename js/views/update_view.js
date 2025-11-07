import { MainView } from './main_view.js';

export class UpdateView extends MainView {
    openEditModal(todo) {
        this.modalTitleInput.value = todo.title;
        this.modalDescriptionInput.value = todo.description;
        this.modalCompletedCheckbox.checked = todo.completed;
        this.modalDateInput.value = todo.date;
        this.modalIdInput.value = todo.id;
        this.hideAlert(true);
        this.modal.show();
    }
    
    closeEditModal() {
        this.modal.hide();
    }
}