import { printUsers } from "./dom.js";

async function loadUsers() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
}

async function showUsers() {
    const users = await loadUsers();
    printUsers(users);
}

const showUsersBtn = document.getElementById("showUsersBtn");
showUsersBtn.addEventListener("click", showUsers);