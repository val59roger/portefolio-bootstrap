document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("footer-container");
    fetch("src/components/footer.html")
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement du footer :", error));
});