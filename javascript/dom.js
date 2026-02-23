function getUserCard(user) {
    return `<article class="user-card">
    <div class="user-header">
        <h2>${user.name}</h2>
        <span>${user.status} - ${user.species}</span>
    </div>

    <div class="user-content">
        <div class="info-block">
            <strong>Información</strong>
            Género: ${user.gender}
            <br />
            Origen: ${user.origin.name}
        </div>

        <div class="info-block">
        <div class="info-block company">
            <strong>Imagen</strong>
            <img src="${user.image}" alt="${user.name}" width="100%">
        </div>
    </div>
</article>`;
}

export function printUsers(users) {
    users.forEach((user) => {
        const card = getUserCard(user);
        const container = document.getElementById("container");
        container.innerHTML += card;
    });
}