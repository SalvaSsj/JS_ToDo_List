export class DeleteView {

    constructor(){
        //aun no estoy segura que va aqui
    }

    cresteRemoveButton(todoId) {
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';

        removeBtn.onclick = () => {
            if(typeof callbak === 'function'){
                callbak(todoId);
            }
        }

        return removeBtn;
    }

    removeRow(id) {
        const row = document.getElementById(id);
        if(row){
            this.remove();
            return true;
        }   
        return false;
    }
}