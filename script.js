// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Show Bootstrap modal on page load
    var welcomeModal = new bootstrap.Modal(document.getElementById("welcomeModal"));
    welcomeModal.show();

    // Search functionality
    document.getElementById("searchInput").addEventListener("input", function () {
        let filter = this.value.toLowerCase();
        let items = document.querySelectorAll(".list-group-item");

        items.forEach(function (item) {
            let text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});
