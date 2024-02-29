function aggiungiTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Inserisci un task valido.");
        return;
    }
    
    const newTask = document.createElement("li");
    const taskId = `task${Date.now()}`; // Genera un ID univoco per la task
    newTask.id = taskId;
    newTask.innerHTML = `<input type="checkbox"> ${taskText} <div class="task-actions"><button onclick="modificaTask('${taskId}')">Modifica</button><button onclick="eliminaTask('${taskId}')">Elimina</button></div>`;

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(newTask);

    salvaLista();
    taskInput.value = "";
}

function eliminaTask(taskId) {
    const task = document.getElementById(taskId);
    task.remove();
    salvaLista();
}

function modificaTask(taskId) {
    const taskText = prompt("Inserisci il nuovo testo per il task:");
    if (taskText !== null) {
        const task = document.getElementById(taskId);
        task.querySelector("input[type='checkbox']").nextSibling.textContent = taskText;
        salvaLista();
    }
}

function eliminaLista() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    salvaLista();
}

function salvaLista() {
    const todoList = document.getElementById("todo-list").innerHTML;
    localStorage.setItem("todoList", todoList);
}

function caricaLista() {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
        const todoList = document.getElementById("todo-list");
        todoList.innerHTML = savedList;
    }
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString('it-IT', dateOptions);
}

setInterval(updateTime, 1000);
updateTime();
caricaLista(); // Carica la lista salvata al caricamento della pagina

// Aggiunge un gestore evento al cambio dello stato del checkbox
document.getElementById("todo-list").addEventListener("change", function(event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        salvaLista(); // Salva solo la lista quando uno dei checkbox viene modificato
    }
});
