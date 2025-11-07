function _injectModalHTML() {
    const modalHtml = `
        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Todo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger d-none" role="alert" id="modal-alert"></div>
                        <form id="modal-form">
                            <div class="form-group">
                                <label>Title</label>
                                <input id="modal-title" type="text" class="form-control" placeholder="Do Something" />
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea class="form-control" id="modal-description" rows="3"></textarea>
                            </div>
                            <div class="form-group d-inline-flex">
                                <label>Completed</label>
                                <div class="mt-1 ml-2">
                                    <input id="modal-completed" type="checkbox" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Date</label>
                                <input id="modal-date" type="date" />
                            </div>
                            <input type="hidden" id="modal-id" />
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-info" id="modal-btn">Save</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

export class MainView {
    constructor() {
        this.tableBody = document.querySelector('#table tbody');
        this.titleInput = document.getElementById('title');
        this.descriptionInput = document.getElementById('description');
        this.dateInput = document.getElementById('date');
        this.alert = document.getElementById('alert');
        this.addBtn = document.getElementById('add');

        _injectModalHTML();

        this.modal = new bootstrap.Modal(document.getElementById('modal'));
        this.modalIdInput = document.getElementById('modal-id');
        this.modalTitleInput = document.getElementById('modal-title');
        this.modalDescriptionInput = document.getElementById('modal-description');
        this.modalCompletedCheckbox = document.getElementById('modal-completed');
        this.modalDateInput = document.getElementById('modal-date');
        this.modalAlert = document.getElementById('modal-alert');
        this.modalSaveBtn = document.getElementById('modal-btn');
    }

    _getTodoRowHTML(todo) {
        const completedChecked = todo.completed ? 'checked' : '';
        const rowClass = todo.completed ? 'table-success' : '';
        return `
            <tr data-todo-id="${todo.id}" class="${rowClass}">
                <td class="todo-title">${todo.title}</td>
                <td class="todo-description">${todo.description}</td>
                <td class="text-center">
                    <input type="checkbox" data-action="toggle" ${completedChecked}>
                </td>
                <td class="text-center">${todo.date}</td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1" data-action="edit">
                        <i class="fa fa-pencil"></i>
                    </button>
                    <button class="btn btn-danger mb-1 ml-1" data-action="delete">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }

    render(todos) {
        this.tableBody.innerHTML = '';
        todos.forEach(todo => {
            this.tableBody.innerHTML += this._getTodoRowHTML(todo);
        });
    }

    showAlert(message, isModal = false) {
        const targetAlert = isModal ? this.modalAlert : this.alert;
        targetAlert.innerText = message;
        targetAlert.classList.remove('d-none');
    }

    hideAlert(isModal = false) {
        const targetAlert = isModal ? this.modalAlert : this.alert;
        targetAlert.classList.add('d-none');
    }

    clearInputs() {
        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.hideAlert();
    }
}