const todoList = [];

function addTodo(){
    let inputElement = document.querySelector('.js-input') ;

    const name = inputElement.value;

    console.log(name);
    todoList.push(name);
    console.log(todoList);

    document.querySelector('.js-list').innerHTML = `${name}`;

    inputElement.value = '';

    
};