const form = document.querySelector(".js-todoForm");
const todoInput = form.querySelector("input");
const ul = document.querySelector(".js-todoList");

let todos = [];
const LS_TODO = "toDos";

function removeTodos(event) {
    const removeTarget = event.target.parentNode;
    const cleanedTodos = todos.filter(function(t) {
        return t.id !== parseInt(removeTarget.id);
    });
    todos = cleanedTodos;
    ul.removeChild(removeTarget);
    saveTodos();
};

function showTodos(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    btn.addEventListener("click", removeTodos);

    btn.classList.add("buttons");
    btn.innerText = "X";
    li.id = todo.id;
    span.innerText = todo.todo;
        
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
};

function saveTodos() {
    const stringTodo = JSON.stringify(todos);
    localStorage.setItem(LS_TODO, stringTodo);
};

function submitListener(event) {
    event.preventDefault();
    let newId, todo;
    
    if(todoInput.value) {
        todo = todoInput.value;    
    }
    if(todo) {
        if(todos.length > 0) {
            newId = todos[todos.length - 1].id + 1;
        } else {
            newId = 0;
        }

        const todoObj = {
            todo : todo,
            id : newId
        };

        todos.push(todoObj);

        saveTodos();

        showTodos(todoObj);
        todoInput.value = "";
    }
};

function init() {
    form.addEventListener("submit", submitListener);

    const loadedTodo = localStorage.getItem(LS_TODO);
        
    if(loadedTodo) {
        const parsedTodo = JSON.parse(loadedTodo);
        todos = parsedTodo;
        todos.forEach(function(todo) {
            showTodos(todo);
        });
    } 
};

init();