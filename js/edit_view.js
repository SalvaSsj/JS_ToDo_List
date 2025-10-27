export class EditView {

    constructor(){
        this.modalElement = document.getElementById('modal'); 
        this.modalTitleInput = document.getElementById('modal-title');
        this.modalDescriptionTextarea = document.getElementById('modal-description');
        this.modalCompletedCheckbox = document.getElementById('modal-completed');
        this.modalSaveBtn = document.getElementById('modal-btn');
    }

    createEditButton(todoId, callback) {
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1')
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        editBtn.onclick = () => {
            if(typeof callback === 'function'){
                callback(todoId);
            }
        }

        return editBtn;
    }

    showModal(todoData, saveCallback) {
        if (!this.modalElement) {
             console.error("El modal de edición no existe");
             return;
        }

        this.modalTitleInput.value = todoData.title;
        this.modalDescriptionTextarea.value = todoData.description;
        this.modalCompletedCheckbox.checked = todoData.completed;
        this.modalSaveBtn.onclick = null;
        this.modalSaveBtn.onclick = () => {
            const updatedData = {
                title: this.modalTitleInput.value,
                description: this.modalDescriptionTextarea.value,
                completed: this.modalCompletedCheckbox.checked,
            };

            if (typeof saveCallback === 'function') {
                saveCallback(todoData.id, updatedData);
            }
        };
    }

    updateRow(id, updatedData) {
        const row = document.getElementById(id);
        if(row){
            row.children[0].textContent = updatedData.title;
            row.children[1].textContent = updatedData.description;
            
            const checkbox = row.querySelector('input[type="checkbox"]');
            if(checkbox) {
                checkbox.checked = updatedData.completed;
            }
            
            return true;
        }   
        return false;
    }
}