import DeleteModel from './js/model_delete.js';
import DeleteView from './js/view_detele.js';

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const btn = document.getElementById('add');
    const alert = document.getElementById('alert');

    //llamar a delete, eso espero xd
    const deleteModel = new DeleteModel();
    const deleteView = new DeleteView();

    function handleDeleteTodo(id) {
        deleteModel.removeTodo(id);
        deleteView.removeRow(id);
    }

    function saveTodo(todo) {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        modelDelete.setTodos(todos);
    }
    //aqui termina lo de delete para llamarlo jsjs

    function addToDo() {
        if (title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = "El título y la descripción son requeridos";
            return;
        }

        alert.classList.add('d-none');
        //aqui voy a creae lo que ocupa el delete, como un id y un objeto para que lo encuentre y lo borre
        const todoId = Date.now().toString();
        const newTodo = {
            id: todoId,
            title: title.value,
            description: description.value,
            completed: false
        };
        saveTodo(newTodo);

    const row = table.insertRow();
    row.setAttribute('id', todoId);
    row.innerHTML = `
            <td>${newTodo.title}</td>
            <td>${newTodo.description}</td>
            <td class="text-center">
                <input type="checkbox" name="chkCompleted" id="chkCompleted">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1"><i class="fa fa-pencil"></i></button>
                
                <button class="btn btn-danger mb-1 ml-1 btn-delete">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        `;
    const deleteBtn = row.querySelector('.btn-delete');
    deleteBtn.onclick = () => { handleDeleteTodo(todoId); };

    title.value = '';
    description.value = '';
}
    function loadTodos() {
       const todos = JSON.parse(localStorage.getItem('todos')) || [];
        modelDelete.setTodos(todos); 
        todos.forEach(todo => {
            const row = table.insertRow();
            row.setAttribute('id', todo.id);
            row.innerHTML = `
                <td>${todo.title}</td>
                <td>${todo.description}</td>
                <td class="text-center">
                    <input type="checkbox" name="chkCompleted" ${todo.completed ? 'checked' : ''}>
                </td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-danger mb-1 ml-1 btn-delete">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            `;
            const deleteButton = row.querySelector('.btn-delete');
            deleteButton.onclick = () => {
                handleDelete(todo.id);
            };
        });
    }
    loadTodos();
    btn.onclick = addToDo;
});


/* --Termine cambiando todo del finla jeje, espero no cag-... cajetearla 
const row = table.insertRow();
row.innerHTML = `
<td>${title.value}</td>
<td>${description.value}</td>
<td class="text-center">
    <input type="checkbox" name="chkCompleted" id="chkCompleted">
</td>
<td class="text-right">
    <button class="btn btn-primary mb-1"><i class="fa fa-pencil"></i></button>
    <button class="btn btn-danger mb-1 ml-1"><i class="fa fa-trash"></i></button>
</td>
`;
}

btn.onclick = addToDo;
})*/