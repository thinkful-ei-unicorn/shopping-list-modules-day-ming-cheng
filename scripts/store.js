import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById (id) {
    const found = items.find (item => {
        return item.id === id;
    })
    //console.log('found')
    return found;
}

function addItem (name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    }catch {
        console.log(`Cannot add item: ${error.message}`);
    }
    //console.log('additem')
}

function findAndToggleChecked (id) {
    this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName (id, newName) {
    try {
        item.validateName(newName);
        this.findById(id).name = newName;
    }catch {
        console.log(`Cannot update name: ${error.message}`);
    }
}

function findAndDelete (id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index,1);
}

function toggleCheckedFilter () {
    this.hideCheckedItems = !this.hideCheckedItems;
}



export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,

  };

