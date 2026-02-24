function getUserCard(user) {
    return `<article class="user-card">
    <div class="user-header">
        <h2>${user.name}</h2>
        <span>ID: ${user.id} • ${user.status} - ${user.species}</span>
    </div>

    <div class="user-content">

        <div class="info-block">
            <strong>Información</strong>
            Género: ${user.gender} <br />
            Origen: ${user.origin.name} <br />
            Ubicación actual: ${user.location.name}
        </div>

        <div class="info-block">
            <strong>Detalles</strong>
            Episodios: ${user.episode.length} <br />
            Creado en API: ${new Date(user.created).toLocaleDateString()}
        </div>

        <div class="info-block company">
            <strong>Imagen</strong>
            <img src="${user.image}" alt="${user.name}">
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