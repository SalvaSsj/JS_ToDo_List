delete(id){
    const index = this.models.findIndex(model => model.id === id);
    this.models.splice(index, 1);
    this.save();
}