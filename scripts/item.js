function validateName (name) {
    if (name.length === 0){
        throw new TypeError ('Name must not be blank');
    }
}

function create (name) {
    return {
        id : cuid(),
        name : name,
        checked : false
    };
}
export default {
    validateName,
    create
}