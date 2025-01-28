document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");
    fetch("src/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement de la navbar :", error));
});