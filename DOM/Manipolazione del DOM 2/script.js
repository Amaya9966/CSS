const userForm = document.getElementById("user-form");
const searchInput = document.getElementById("search-last-name");
const searchButton = document.getElementById("search-btn");
const infoBox = document.getElementById("info-box");

let users = [];

userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (firstName !== "" && lastName !== "" && age !== "") {
        const user = { firstName, lastName, age };
        users.push(user);
        updateUserList(user);
        userForm.reset();
    } else {
        alert("Compila tutti i campi.");
    }
});

searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value.trim();
    const foundUser = users.find(user => user.lastName.toLowerCase() === searchTerm.toLowerCase());

    if (foundUser) {
        displayUserInfo(foundUser);
    } else {
        infoBox.innerHTML = "<p>Nessun utente trovato con questo cognome.</p>";
    }
});

function updateUserList(user) {
    const successMessage = `Utente ${user.firstName} ${user.lastName} salvato con successo.`;
    alert(successMessage);
}

searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value.trim().toLowerCase(); // Converti il termine di ricerca in minuscolo
    const foundUsers = users.filter(user => user.lastName.toLowerCase() === searchTerm);

    if (foundUsers.length > 0) {
        displayUserInfo(foundUsers);
    } else {
        infoBox.innerHTML = "<p>Nessun utente trovato con questo cognome.</p>";
    }
});

function displayUserInfo(users) {
    const userList = document.createElement("ul");
    if (users.length > 0) {
        users.forEach(user => {
            const userItem = document.createElement("li");
            userItem.innerHTML = `
                <strong>Nome:</strong> ${user.firstName}<br>
                <strong>Cognome:</strong> ${user.lastName}<br>
                <strong>Età:</strong> ${user.age}
            `;
            userList.appendChild(userItem);
        });
        infoBox.innerHTML = ""; // Pulisci il contenuto prima di aggiungere la nuova lista
        infoBox.appendChild(userList);
    } else {
        infoBox.innerHTML = "<p>Nessun utente trovato con questo cognome.</p>";
    }
}