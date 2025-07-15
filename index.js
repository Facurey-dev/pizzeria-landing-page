document.addEventListener("DOMContentLoaded", () => {
    const menuLink = document.getElementById("menu-link");
    const menuItems = document.getElementById("menu-items");

    console.log("JS cargado");

    if (menuLink && menuItems) {
        menuLink.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que el enlace haga scroll o recargue
            console.log("Clickeaste el menú");

            menuItems.classList.toggle("show");

            // Opcional: si querés hacer scroll suave al menú
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
        });
    } else {
        console.log("No se encontró el botón o el menú");
    }
});
