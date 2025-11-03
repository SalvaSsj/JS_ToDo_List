import { UpdateModel } from './models/update_model.js';
import { UpdateView } from './views/update_view.js';
import { UpdateController } from './controllers/update_controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const view = new UpdateView();
    const model = new UpdateModel();
    const controller = new UpdateController(model, view);
    view.render(model.getTodos());
});